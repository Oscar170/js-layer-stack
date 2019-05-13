import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from '../shared/app';
import { APP_CONTAINER_SELECTOR } from '../shared/config';
import theme from '../shared/theme';

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR);

const wrapApp = AppComponent => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <AppComponent />
    </ThemeProvider>
  </BrowserRouter>
);

ReactDOM.hydrate(
  // eslint-disable-next-line no-underscore-dangle
  wrapApp(App),
  rootEl
);
