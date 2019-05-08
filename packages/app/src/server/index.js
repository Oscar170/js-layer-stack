import compression from 'compression';
import express from 'express';
import { WEB_PORT, STATIC_PATH } from '../shared/config';
import routing from './routing';
import { isProd } from '../shared/util';

const app = express();

app.use(compression());
app.use(STATIC_PATH, express.static('dist'));
routing(app);

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Server running on port ${WEB_PORT} ${
      isProd
        ? '(production)'
        : '(development).\nKeep "npm run dev:client" running in an other terminal'
    }.`
  );
});
