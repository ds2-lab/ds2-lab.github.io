// Minimal BibTeX reader for src/data/papers.bib (al-folio style fields).
// Adapted from the Lumina template's parser.

export interface Publication {
  key: string;
  title: string;
  authors: string[];
  /** Numeric year, or undefined for preprints. */
  year?: number;
  preprint: boolean;
  /** Group label shown on the publications page ("Preprints", "2026", ...). */
  group: string;
  venue: string;
  abbr: string;
  type: 'conference' | 'journal' | 'workshop' | 'thesis' | 'preprint' | 'other';
  /** selected = {true} in papers.bib: shown on the homepage. */
  selected: boolean;
  award?: string;
  abstract?: string;
  links: { label: 'arXiv' | 'PDF' | 'Code' | 'Website'; url: string }[];
}

export function parseBibTeX(src: string): Publication[] {
  const out: Publication[] = [];
  const entryRe = /^@(\w+)\s*\{\s*([^,\s]*)\s*,([\s\S]*?)(?=^\s*@|(?![\s\S]))/gm;
  let m: RegExpExecArray | null;
  while ((m = entryRe.exec(src)) !== null) {
    const bibType = m[1].toLowerCase();
    if (['comment', 'preamble', 'string'].includes(bibType)) continue;
    const f = parseFields(m[3]);
    if ((f.display ?? 'true').toLowerCase() === 'false') continue;

    const yearRaw = f.year ?? '';
    const yearNum = parseInt(yearRaw, 10);
    const preprint = Number.isNaN(yearNum) || /preprint/i.test(f.abbr ?? '');
    const venue = clean(f.booktitle || f.journal || f.school || '');
    const abbr = clean(f.abbr ?? '');

    out.push({
      key: m[2],
      title: clean(f.title ?? ''),
      authors: parseAuthors(f.author ?? ''),
      year: Number.isNaN(yearNum) ? undefined : yearNum,
      preprint,
      group: Number.isNaN(yearNum) ? 'Preprints' : String(yearNum),
      venue,
      abbr,
      type: classify(bibType, venue, abbr, preprint),
      selected: (f.selected ?? '').toLowerCase() === 'true',
      award: f.award ? clean(f.award.replace(/<[^>]+>/g, '')) : undefined,
      abstract: f.abstract ? clean(f.abstract) : undefined,
      links: buildLinks(f),
    });
  }
  return out;
}

/** Group by year label, preprints first, keeping the file's order within each group. */
export function groupByYear(pubs: Publication[]): { label: string; pubs: Publication[] }[] {
  const labels = [...new Set(pubs.map(p => p.group))].sort((a, b) => {
    if (a === 'Preprints') return -1;
    if (b === 'Preprints') return 1;
    return Number(b) - Number(a);
  });
  return labels.map(label => ({ label, pubs: pubs.filter(p => p.group === label) }));
}

function buildLinks(f: Record<string, string>): Publication['links'] {
  const links: Publication['links'] = [];
  const isArxiv = (u?: string) => !!u && /arxiv\.org/i.test(u);

  const arxiv = f.arxiv || (isArxiv(f.url) ? f.url : undefined) || (isArxiv(f.pdf) ? f.pdf : undefined);
  if (arxiv) links.push({ label: 'arXiv', url: arxiv });

  // PDF: the paper itself, else the publisher's page (ACM DL, USENIX, IEEE, DOI).
  let pdf: string | undefined;
  if (f.pdf && f.pdf !== '#' && !isArxiv(f.pdf)) pdf = /:\/\//.test(f.pdf) ? f.pdf : `/pdfs/${f.pdf}`;
  else if (f.html) pdf = f.html;
  else if (f.url && !isArxiv(f.url)) pdf = f.url;
  else if (f.doi) pdf = `https://doi.org/${f.doi}`;
  if (pdf) links.push({ label: 'PDF', url: pdf });

  if (f.code) links.push({ label: 'Code', url: f.code });
  if (f.website) links.push({ label: 'Website', url: f.website });
  return links;
}

function classify(bibType: string, venue: string, abbr: string, preprint: boolean): Publication['type'] {
  if (preprint) return 'preprint';
  if (bibType === 'phdthesis' || bibType === 'mastersthesis' || /thesis|dissertation/i.test(venue + abbr)) return 'thesis';
  if (/workshop|hot(storage|cloud)|pdsw|varsys|opt'|optml|apsys/i.test(venue + ' ' + abbr)) return 'workshop';
  if (bibType === 'article' && !/proceedings|conference/i.test(venue)) return 'journal';
  if (bibType === 'inproceedings' || bibType === 'conference') return 'conference';
  return 'other';
}

function parseFields(body: string): Record<string, string> {
  const fields: Record<string, string> = {};
  const re = /(\w+)\s*=\s*/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(body)) !== null) {
    const key = m[1].toLowerCase();
    let i = re.lastIndex;
    let value = '';
    const ch = body[i];
    if (ch === '{') {
      let depth = 0;
      const start = i;
      for (; i < body.length; i++) {
        if (body[i] === '{') depth++;
        else if (body[i] === '}') { depth--; if (depth === 0) { i++; break; } }
      }
      value = body.slice(start + 1, i - 1);
    } else if (ch === '"') {
      const start = ++i;
      while (i < body.length && body[i] !== '"') i++;
      value = body.slice(start, i++);
    } else {
      const start = i;
      while (i < body.length && /[\w-]/.test(body[i])) i++;
      value = body.slice(start, i);
    }
    fields[key] = value.replace(/\s+/g, ' ').trim();
    re.lastIndex = i;
  }
  return fields;
}

function parseAuthors(s: string): string[] {
  return s.split(/\s+and\s+/i).map(a => {
    const parts = a.trim().split(/\s*,\s*/);
    return clean(parts.length === 2 ? `${parts[1]} ${parts[0]}` : a.trim());
  }).filter(Boolean);
}

function clean(s: string): string {
  return s
    .replace(/\\[`'^"~=.uvHc]\{?([a-zA-Z])\}?/g, '$1')
    .replace(/\\&/g, '&')
    .replace(/\\textbf|\\textit|\\emph/g, '')
    .replace(/[{}]/g, '')
    .replace(/~/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
