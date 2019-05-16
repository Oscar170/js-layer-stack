import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from '../shared/app';
import { APP_CONTAINER_SELECTOR } from '../shared/config';
import theme from '../shared/theme';
import { isProd } from '../shared/util';

/* eslint-disable no-underscore-dangle */
const preloadState = window.__PRELOADED_STATE__;
const store = createStore(
  state => state,
  preloadState,
  isProd ||
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__())
);
/* eslint-enable no-underscore-dangle */

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR);

const wrapApp = AppComponent => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppComponent />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

ReactDOM.hydrate(
  // eslint-disable-next-line no-underscore-dangle
  wrapApp(App),
  rootEl
);
