import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Reader from './Reader/Reader';
import routes from '../routes';

import publications from './Publication/publications.json';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path={routes.HOME}
        // eslint-disable-next-line react/jsx-props-no-spreading
        render={props => <Reader {...props} items={publications} />}
      />
      <Redirect to={routes.HOME} />
    </Switch>
  </BrowserRouter>
);

export default App;
