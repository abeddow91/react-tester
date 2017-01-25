//imports the react library
import React from 'react';
//imports the react tools required to render to the dom
import ReactDOM from 'react-dom';
//imports the React component into the app
import Detail from './pages/Detail';

//kicks off the rendering of the app and takes 2 parameters: some jsx to render and where to render it p
ReactDOM.render(
  //as we dont give the component a name, this name comes from the way we import it so if we used import Bob from './pages/detail'; them you could write <Bob /> and it would still work
  <Detail message="this is coming from props"/>,
  document.getElementById('app')
);


//avoid putting lots of components in xxx.js, stick to one component per .js if possible
