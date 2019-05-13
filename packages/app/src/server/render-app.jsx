import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import Helmet from 'react-helmet';
import { ServerStyleSheet, ThemeProvider } from 'styled-components';
import { APP_CONTAINER_CLASS, STATIC_PATH, WDS_PORT } from '../shared/config';
import App from '../shared/app';
import { isProd } from '../shared/util';
import theme from '../shared/theme';

const renderApp = (location, routerContext = {}) => {
  const sheet = new ServerStyleSheet();
  const appHtml = renderToString(
    sheet.collectStyles(
      <StaticRouter location={location} context={routerContext}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StaticRouter>
    )
  );

  const helmet = Helmet.renderStatic();

  return `
    <!doctype html>
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${sheet.getStyleTags()}
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
