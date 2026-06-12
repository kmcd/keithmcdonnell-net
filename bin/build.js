#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const ARTICLES_DIR = path.join(ROOT, 'articles');
const SRC_DIR = path.join(ROOT, 'src');
const DIST_DIR = path.join(ROOT, 'dist');

function getMarked() {
  try { return require('marked').marked; } catch {
    console.error('Error: run `npm install` first.'); process.exit(1);
  }
}

const CATEGORIES = [
  { key: 'pricing',     label: 'Pricing' },
  { key: 'problems',    label: 'Problems' },
  { key: 'comparisons', label: 'Comparisons' },
  { key: 'reviews',     label: 'Reviews &amp; proof' },
  { key: 'fit',         label: 'Best / worst fit' },
];

const STAGE_LABELS = { reframe: 'Reframe', evaluate: 'Evaluate', commit: 'Commit', expand: 'Expand' };

function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { meta: {}, body: raw };
  const meta = {};
  for (const line of m[1].split(/\r?\n/)) {
    const colon = line.indexOf(':');
    if (colon < 1) continue;
    meta[line.slice(0, colon).trim()] = line.slice(colon + 1).trim().replace(/^["'](.*)["']$/, '$1');
  }
  return { meta, body: m[2].trim() };
}

function loadArticles() {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs.readdirSync(ARTICLES_DIR)
    .filter(f => f.endsWith('.md') && !f.startsWith('_'))
    .flatMap(f => {
      const { meta, body } = parseFrontmatter(fs.readFileSync(path.join(ARTICLES_DIR, f), 'utf8'));
      if (!meta.title || !meta.slug || !meta.category || !meta.stage) {
        console.warn(`  skip ${f} — missing frontmatter`); return [];
      }
      return [{ ...meta, body }];
    });
}

function buildLibraryGrid(articles) {
  return CATEGORIES.flatMap(({ key, label }) => {
    const items = articles
      .filter(a => a.category === key)
      .sort((a, b) => (b.status === 'live') - (a.status === 'live'));
    if (!items.length) return [];
    const lis = items.map(a => {
      const tag = `<span class="stage">${STAGE_LABELS[a.stage] || a.stage}</span>`;
      return a.status === 'live'
        ? `<li>${tag}<a href="/articles/${a.slug}/">${a.title}</a></li>`
        : `<li class="soon">${tag}${a.title}<span class="soon-tag">soon</span></li>`;
    });
    return [`<div class="lib-cat">\n          <h3>${label}</h3>\n          <ul>\n            ${lis.join('\n            ')}\n          </ul>\n        </div>`];
  }).join('\n\n        ');
}

function render(template, vars) {
  return Object.entries(vars).reduce((t, [k, v]) => t.replaceAll(`{{${k}}}`, v ?? ''), template);
}

function ensureDir(d) { fs.mkdirSync(d, { recursive: true }); }

function build() {
  ensureDir(DIST_DIR);

  const articles = loadArticles();
  const live = articles.filter(a => a.status === 'live');
  console.log(`${articles.length} articles, ${live.length} live`);

  // Home page
  const indexSrc = fs.readFileSync(path.join(SRC_DIR, 'index.html'), 'utf8');
  const grid = buildLibraryGrid(articles);
  fs.writeFileSync(path.join(DIST_DIR, 'index.html'), indexSrc.replace('<!-- BUILD:LIBRARY_GRID -->', grid));
  console.log('✓ index.html');

  // Copy other static src files
  for (const f of fs.readdirSync(SRC_DIR)) {
    if (f === 'index.html' || f === 'article.html') continue;
    if (f.endsWith('.html')) {
      fs.copyFileSync(path.join(SRC_DIR, f), path.join(DIST_DIR, f));
      console.log(`✓ ${f}`);
    }
  }

  // Article pages
  if (live.length) {
    const marked = getMarked();
    const articleTemplate = fs.readFileSync(path.join(SRC_DIR, 'article.html'), 'utf8');
    ensureDir(path.join(DIST_DIR, 'articles'));
    for (const a of live) {
      const dir = path.join(DIST_DIR, 'articles', a.slug);
      ensureDir(dir);
      const catLabel = CATEGORIES.find(c => c.key === a.category)?.label ?? '';
      fs.writeFileSync(path.join(dir, 'index.html'), render(articleTemplate, {
        title:       a.title,
        stage:       STAGE_LABELS[a.stage] || a.stage,
        category:    catLabel,
        content:     marked(a.body),
        date:        a.date ?? '',
        description: a.description ?? a.title,
      }));
      console.log(`✓ articles/${a.slug}/`);
    }
  }

  console.log('\nBuild complete → dist/');
}

build();
