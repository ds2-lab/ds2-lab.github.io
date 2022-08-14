---
hide:
  - navigation
  - toc
---

<script src="//code.iconify.design/1/1.0.6/iconify.min.js"></script>

<style>

  .responsive-grid {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }

  @media screen and (min-width: 64rem) {
    .responsive-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .card-wrapper {
    text-decoration: none;
    transition: none;
    background: none;
    padding: 0;
  }

  .card {
    position: relative;
    padding: 1.5rem;
    display: flex;
    flex-direction: row;
    -moz-box-align: center;
    align-items: center;
    height: 100%;
    -moz-box-pack: start;
    justify-content: flex-start;
    box-shadow: rgba(0, 0, 0, 0.1) 0.4rem 0.4rem 0px -0.0625rem, rgba(0, 0, 0, 0.40) 0px 0.50rem 0.5rem 0px;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
  }

  .card:hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0.40rem 0.40rem 0px -0.0625rem, rgba(0, 0, 0, 0.60) 0px 0.50rem 0.5rem 0px;
  }

  @media screen and (min-width: 75rem) {
    .card {
      padding: 2rem 2.5rem;
      margin: 0px 1px;
      border-radius: 4px;
    }
  }

  @media screen and (min-width: 36rem) {
    .card {
      padding: 1rem 1.5rem;
      margin: 0px 1px;
      border-radius: 4px;

    }
  }

  .card .logo {
    margin-right: 0.75rem;
    width: 80px;
    height: 80px;
  }

  .card .card-content {
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    width: 100%;
  }

  .card .card-content h5 {
    margin: 0;
  }
  
    .card .card-content h4 {
    margin: 0;
  }

  .card .card-content p {
    margin-top: 0.25em;
    margin-bottom: 0;
    font-size: 14px;
  }
  
    .card .card-content li {
    font-size: 12px;
  }

  .card .card-content code {
    background: rgba(0, 0, 0, 0.05) none repeat scroll 0% 0%;
    padding: 2px 6px;
    border-radius: 4px;
  }


  .component-wrapper span.em {
    color: rgb(61, 61, 61);
  }

  .component-wrapper a {
    transition: color 125ms;
    padding: 2px 6px;
    margin: 0px 1px;
    border-radius: 4px;
    display: inline;
    cursor: pointer;
  }

  .component-wrapper a:hover {
    color: var(--md-typeset-a-color);
    background: var(--md-accent-fg-color--transparent);
  }
</style>


## Open Science and Open Source

We are committed to open science. We make our research and its
dissemination, including publications, datasets, and software
artifacts, accessible to support use and development both in academia
and industry. 

The research artifacts are publicly available at 
[github.com/mason-leap-lab](https://github.com/mason-leap-lab){:target="\_blank"}.



