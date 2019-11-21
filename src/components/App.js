import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Reader from './Reader/Reader';
import routes from '../routes';

import publications from './Publication/publications.json';

const App = () => (
  <BrowserRouter>
    <Route
      path={routes.HOME}
      // eslint-disable-next-line react/jsx-props-no-spreading
      render={props => <Reader {...props} items={publications} />}
    />
    <Redirect from="/*" to="/reader?item=1" />
  </BrowserRouter>
);

export default App;
