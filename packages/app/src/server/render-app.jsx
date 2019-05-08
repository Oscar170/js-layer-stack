import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import Helmet from 'react-helmet';
import { APP_CONTAINER_CLASS, STATIC_PATH, WDS_PORT } from '../shared/config';
import App from '../shared/app';
import { isProd } from '../shared/util';

const renderApp = (location, routerContext = {}) => {
  const appHtml = renderToString(
    <StaticRouter location={location} context={routerContext}>
      <App />
    </StaticRouter>
  );

  const helmet = Helmet.renderStatic();

  return `
    <!doctype html>
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div class="${APP_CONTAINER_CLASS}">${appHtml}</div>
        <script>
          window.__PRELOADED_STATE__ = {}
        </script>
        <script src="${
          isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`
        }/js/bundle.js"></script>
      </body>
    </html>
  `;
};

export default renderApp;
