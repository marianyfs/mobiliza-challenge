import React from 'react';

import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import SeachPage from './pages/SearchPage';
import UauPage from './pages/UauPage';

import Header from './components/organisms/Header';
import SPA from './components/templates/SPA';

function App() {
  return (
    <BrowserRouter>
      <SPA header={<Header />}>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Switch>
          <Route path="/search" exact component={SeachPage} />
          <Route path="/uau" exact component={UauPage} />
          <Route render={() => <Redirect to="/search" />} />
        </Switch>
      </SPA>
    </BrowserRouter>
  );
}

export default App;
