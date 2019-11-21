import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
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
      <Redirect
        to={{
          pathname: '/reader',
          search: '?item=1',
        }}
      />
    </Switch>
  </BrowserRouter>
);

export default App;
