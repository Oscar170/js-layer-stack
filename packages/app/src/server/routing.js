import renderApp from './render-app';
import { COUNTER_PAGE_ROUTE, HOME_PAGE_ROUTE } from '../shared/routes';

const routing = app => {
  app.get(HOME_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url));
  });

  app.get(COUNTER_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url));
  });

  app.get('*', (req, res) => {
    res.status(404).send(renderApp(req.url));
  });
};

export default routing;
