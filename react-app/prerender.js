import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function prerender() {
  const distPath = path.resolve(__dirname, 'dist');
  const ssrPath = path.resolve(__dirname, 'dist-ssr', 'entry-server.js');

  const { render } = await import(ssrPath);

  const template = fs.readFileSync(
    path.resolve(distPath, 'index.html'),
    'utf-8',
  );

  const appHtml = render();
  const html = template.replace('<!--app-html-->', appHtml);

  fs.writeFileSync(path.resolve(distPath, 'index.html'), html);
  fs.writeFileSync(path.resolve(distPath, '404.html'), html);

  console.log('Pre-rendered index.html + 404.html');
}

prerender();
