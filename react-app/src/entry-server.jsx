import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import AppRouter from './AppRouter.jsx';

export { default as PROJECTS } from './data/projects.js';
export { formatTitle } from './data/constants.js';

export function render(url = '/') {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <AppRouter />
      </StaticRouter>
    </React.StrictMode>
  );
}
