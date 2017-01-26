import React from 'react';
//Router is a react router itself which takes a list of URLs and React components and puts the two together.
//Route is one individual URl mapping e.g. the URl detail and our Detail components
//IndexRoute is used as a default route
//useRouterHistory is
import { Router, Route, IndexRoute, useRouterHistory, hashHistory, browserHistory } from 'react-router';
//react router needs a smart way to handle history. this is dpne partly through # and partly through special query keys in the url. this takes out the query keys
import { createHashHistory } from 'history';
//imports the React component into the app

import App from './pages/App';
import Detail from './pages/Detail';
import List from './pages/List';
import User from './pages/User';

//as we dont give the component a name, this name comes from the way we import it so if we used import Bob from './pages/detail'; them you could write <Bob /> and it would still work


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={List} />
    <Route path="detail/:repo" component={Detail} />
    <Route path="user" component={User} />
  </Route>
);

export default routes;
