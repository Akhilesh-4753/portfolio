import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { projects } from '../src/data/projects.js';

const ROOT_DIR = process.cwd();
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const SSR_DIR = path.join(ROOT_DIR, 'dist-ssr');
const SSR_ENTRY = path.join(SSR_DIR, 'entry-server.js');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

function injectPrerenderedContent(template, routeUrl, headHtml, appHtml) {
  const seoMarkerRegex = /<!--\s*SEO_HEAD_START\s*-->[\s\S]*?<!--\s*SEO_HEAD_END\s*-->/;
  if (!seoMarkerRegex.test(template)) {
    throw new Error('Missing SEO_HEAD_START / SEO_HEAD_END markers in dist/index.html');
  }
  if (!template.includes('<div id="root"></div>')) {
    throw new Error('Missing <div id="root"></div> mount point in dist/index.html');
  }

  let html = template.replace(
    seoMarkerRegex,
    () => `<!-- SEO_HEAD_START -->\n    ${headHtml}\n    <!-- SEO_HEAD_END -->`
  );
  html = html.replace(
    '<div id="root"></div>',
    () => `<div id="root" data-ssr-path="${routeUrl}">${appHtml}</div>`
  );
  return html;
}

async function runPrerender() {
  if (!fs.existsSync(TEMPLATE_PATH)) {
    throw new Error(`Client build missing at ${TEMPLATE_PATH}`);
  }
  if (!fs.existsSync(SSR_ENTRY)) {
    throw new Error(`SSR entry missing at ${SSR_ENTRY}`);
  }

  const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');
  const { render } = await import(pathToFileURL(SSR_ENTRY).href);

  const routes = [
    { url: '/', outFile: path.join(DIST_DIR, 'index.html') },
    ...projects.map((project) => ({
      url: `/projects/${project.slug}`,
      outFile: path.join(DIST_DIR, 'projects', `${project.slug}.html`)
    })),
    { url: '/404', outFile: path.join(DIST_DIR, '404.html') }
  ];

  for (const route of routes) {
    const { appHtml, headHtml } = render(route.url);
    const fullHtml = injectPrerenderedContent(template, route.url, headHtml, appHtml);
    fs.mkdirSync(path.dirname(route.outFile), { recursive: true });
    fs.writeFileSync(route.outFile, fullHtml, 'utf8');
    console.info(`[prerender] generated ${path.relative(ROOT_DIR, route.outFile)} (${route.url})`);
  }

  fs.rmSync(SSR_DIR, { recursive: true, force: true });
}

runPrerender().catch((error) => {
  console.error('[prerender] failed:', error);
  process.exit(1);
});

