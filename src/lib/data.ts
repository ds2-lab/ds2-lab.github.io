import fs from 'node:fs';
import path from 'node:path';
import yaml from 'yaml';
import { marked } from 'marked';
import { parseBibTeX, type Publication } from './bibtex';

const dataDir = path.resolve(process.cwd(), 'src/data');

function load<T>(file: string): T {
  return yaml.parse(fs.readFileSync(path.join(dataDir, file), 'utf-8')) as T;
}

/** Render inline Markdown (links, bold, italics). External links open in a new tab. */
export function md(text: string | undefined): string {
  if (!text) return '';
  const html = marked.parseInline(text) as string;
  return html.replace(/<a href="(https?:\/\/[^"]+)"/g, '<a href="$1" target="_blank" rel="noopener noreferrer"');
}

export function isExternal(url: string): boolean {
  return /^https?:\/\//.test(url);
}

// ── Site ────────────────────────────────────────────────────────
export interface Site {
  title: string;
  full_name: string;
  url: string;
  description: string;
  github: string;
  director_homepage: string;
  google_analytics?: string;
  welcome: {
    heading: string;
    intro: string;
    body: string;
    focus_intro: string;
    focus: { title: string; text: string }[];
    join: string;
  };
  mission: string[];
  home: { news_months: number; projects: number; publications?: number };
}
export const getSite = () => load<Site>('site.yml');

// ── News ────────────────────────────────────────────────────────
export interface NewsMonth { date: Date; items: string[] }

export function getNews(): NewsMonth[] {
  const raw = load<{ date: string | Date; items: string[] }[]>('news.yml') || [];
  const byMonth = new Map<string, NewsMonth>();
  for (const entry of raw) {
    const d = entry.date instanceof Date ? entry.date : new Date(`${entry.date}-01T00:00:00Z`);
    const key = `${d.getUTCFullYear()}-${d.getUTCMonth()}`;
    if (!byMonth.has(key)) byMonth.set(key, { date: d, items: [] });
    byMonth.get(key)!.items.push(...(entry.items || []));
  }
  return [...byMonth.values()].sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function formatMonth(d: Date, style: 'long' | 'short' = 'short'): string {
  return new Intl.DateTimeFormat('en-US', { month: style, year: 'numeric', timeZone: 'UTC' }).format(d);
}

// ── Team ────────────────────────────────────────────────────────
export interface Member {
  name: string;
  group: 'phd' | 'masters' | 'undergrad' | 'highschool' | 'alumni';
  role?: string;
  interests?: string;
  project?: string;
  years?: string;
  placement?: string;
  image?: string;
  url?: string;
}
export interface Team {
  director: {
    name: string; title: string; image: string; image_position?: string; bio: string;
    links: Record<string, string>;
  };
  members: Member[];
}
export const getTeam = () => load<Team>('team.yml');

export const teamGroups: { key: Member['group']; label: string }[] = [
  { key: 'phd', label: 'Ph.D. students' },
  { key: 'masters', label: "Master's students" },
  { key: 'undergrad', label: 'Undergraduate students' },
  { key: 'highschool', label: 'High school students' },
  { key: 'alumni', label: 'Alumni' },
];

// ── Publications (BibTeX) ───────────────────────────────────────
export type { Publication } from './bibtex';
export { groupByYear } from './bibtex';
export const getPublications = (): Publication[] =>
  parseBibTeX(fs.readFileSync(path.join(dataDir, 'papers.bib'), 'utf-8'));

/** Bold the lab director's name in an author list. */
export function authorsHtml(authors: string[], highlight = 'Yue Cheng'): string {
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  return authors.map(a => (a === highlight ? `<strong>${esc(a)}</strong>` : esc(a))).join(', ');
}

// ── Projects (open source) ──────────────────────────────────────
export interface Project {
  title: string;
  category?: string;
  description: string;
  github?: string;
  github_stars?: number;
  url?: string;
  tags?: string[];
  featured?: boolean;
  date?: string | Date;
}
export const getProjects = () => load<{ projects: Project[] }>('projects.yml').projects || [];
export const projectHref = (p: Project) => p.url || p.github || '';
export const starsUrl = (p: Project) => (p.github ? `${p.github.replace(/\/$/, '')}/stargazers` : '');
export function formatStars(n?: number): string {
  if (!n) return '';
  return new Intl.NumberFormat('en', { notation: n >= 1000 ? 'compact' : 'standard', maximumFractionDigits: 1 }).format(n);
}

// ── Grants ──────────────────────────────────────────────────────
export interface Grant {
  title: string;
  sponsor: string;
  award: string;
  award_url?: string;
  pis: string;
  amount: string;
  start: number;
  featured?: boolean;
}
export interface Sponsor { name: string; url: string; logo?: string }
export function getGrants() {
  const data = load<{ sponsors: Sponsor[]; grants: Grant[] }>('grants.yml');
  const grants = [...(data.grants || [])].sort((a, b) => b.start - a.start);
  return { sponsors: data.sponsors || [], grants };
}
