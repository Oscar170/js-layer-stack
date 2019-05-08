import React from 'react';
import { Switch } from 'react-router';
import { Route, NavLink } from 'react-router-dom';
import Helmet from 'react-helmet';
import { COUNTER_PAGE_ROUTE, HOME_PAGE_ROUTE } from './routes';
import Counter from './containers/Counter';
import Grettings from './containers/Grettings';

const App = () => {
  return (
    <div>
      <Helmet>
        <title>My awesome project App</title>
        <meta charSet="utf-8" />
      </Helmet>
      <nav>
        <ul>
          {[
            { route: HOME_PAGE_ROUTE, label: 'Home' },
            { route: COUNTER_PAGE_ROUTE, label: 'Say Hello' },
          ].map(link => (
            <li key={link.route}>
              <NavLink to={link.route}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Switch>
        <Route exact path={HOME_PAGE_ROUTE} component={Grettings} />
        <Route path={COUNTER_PAGE_ROUTE} component={Counter} />
        <Route component={() => <span>Page not found</span>} />
      </Switch>
    </div>
  );
};

export default App;
