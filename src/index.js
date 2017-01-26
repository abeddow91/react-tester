//imports the react library
import React from 'react';
//imports the react tools required to render to the dom
import ReactDOM from 'react-dom';
//Router is a react router itself which takes a list of URLs and React components and puts the two together.
//Route is one individual URl mapping e.g. the URl detail and our Detail components
//IndexRoute is used as a default route
//useRouterHistory is
import { Router, Route, IndexRoute, useRouterHistory, hashHistory, browserHistory } from 'react-router';
//react router needs a smart way to handle history. this is dpne partly through # and partly through special query keys in the url. this takes out the query keys
import { createHashHistory } from 'history';
//imports the React component into the app
import Detail from './pages/Detail';
import List from './pages/List';


//kicks off the rendering of the app and takes 2 parameters: some jsx to render and where to render it p


  //as we dont give the component a name, this name comes from the way we import it so if we used import Bob from './pages/detail'; them you could write <Bob /> and it would still work
  ReactDOM.render((
    <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
      <Route path="/" component={Detail} />
      <Route path="/react" component={List} />
    </Router>
  ), document.getElementById('app'))


//avoid putting lots of components in xxx.js, stick to one component per .js if possible
