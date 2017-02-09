import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from '../components/app';
import MojoMenu from '../containers/mojo_menu';
import MojoMenuDetails from '../containers/mojo_menu_details';
import { loadData } from './routes_callback';

export default (
  <Route path='/' component={App} onEnter={loadData()}>
    <IndexRoute component={MojoMenu} />
    <Route path='menu/:menuId' component={MojoMenuDetails} />
    <Redirect from='*' to='/' />
  </Route>
)
