import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import NotFound from './NotFound.jsx';

export function render() {
  return renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export function render404() {
  return renderToString(
    <React.StrictMode>
      <NotFound />
    </React.StrictMode>
  );
}
