//imports the react library
import React from 'react';
//imports the react tools required to render to the dom
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory, hashHistory, browserHistory } from 'react-router';

import routes from './routes';


//kicks off the rendering of the app and takes 2 parameters: some jsx to render and where to render it p


  ReactDOM.render((
    <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
      {routes}
    </Router>
  ), document.getElementById('app'))


//avoid putting lots of components in xxx.js, stick to one component per .js if possible
