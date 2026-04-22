import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function prerender() {
  const distPath = path.resolve(__dirname, 'dist');
  const ssrPath = path.resolve(__dirname, 'dist-ssr', 'entry-server.js');

  const { render, render404, PROJECTS, formatTitle } = await import(ssrPath);

  const mainTemplate = fs.readFileSync(
    path.resolve(distPath, 'index.html'),
    'utf-8',
  );

  function withTitle(html, page) {
    return html.replace(/<title>.*?<\/title>/, `<title>${formatTitle(page)}</title>`);
  }

  const mainHtml = mainTemplate.replace('<!--app-html-->', render('/'));
  fs.writeFileSync(path.resolve(distPath, 'index.html'), mainHtml);

  const workDir = path.resolve(distPath, 'work');
  fs.mkdirSync(workDir, { recursive: true });
  const workHtml = withTitle(
    mainTemplate.replace('<!--app-html-->', render('/work')),
    'Work',
  );
  fs.writeFileSync(path.resolve(workDir, 'index.html'), workHtml);

  for (const project of PROJECTS) {
    const dir = path.resolve(distPath, 'work', project.slug);
    fs.mkdirSync(dir, { recursive: true });
    const projectHtml = withTitle(
      mainTemplate.replace('<!--app-html-->', render(`/work/${project.slug}`)),
      project.name,
    );
    fs.writeFileSync(path.resolve(dir, 'index.html'), projectHtml);
  }

  const notFoundTemplate = fs.readFileSync(
    path.resolve(distPath, '404.html'),
    'utf-8',
  );
  const notFoundHtml = notFoundTemplate.replace('<!--app-html-->', render404());
  fs.writeFileSync(path.resolve(distPath, '404.html'), notFoundHtml);

  console.log(`Pre-rendered index.html + ${PROJECTS.length} project pages + 404.html`);
}

prerender();
