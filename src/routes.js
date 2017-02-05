import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './components/app';
import MojoMenu from './containers/mojo_menu';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={MojoMenu} />
    <Redirect from='*' to='/' />
  </Route>
)
