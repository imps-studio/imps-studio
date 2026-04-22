import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function prerender() {
  const distPath = path.resolve(__dirname, 'dist');
  const ssrPath = path.resolve(__dirname, 'dist-ssr', 'entry-server.js');

  const { render, render404 } = await import(ssrPath);

  // Main landing page
  const mainTemplate = fs.readFileSync(
    path.resolve(distPath, 'index.html'),
    'utf-8',
  );
  const mainHtml = mainTemplate.replace('<!--app-html-->', render());
  fs.writeFileSync(path.resolve(distPath, 'index.html'), mainHtml);

  // 404 page
  const notFoundTemplate = fs.readFileSync(
    path.resolve(distPath, '404.html'),
    'utf-8',
  );
  const notFoundHtml = notFoundTemplate.replace('<!--app-html-->', render404());
  fs.writeFileSync(path.resolve(distPath, '404.html'), notFoundHtml);

  console.log('Pre-rendered index.html + 404.html');
}

prerender();
