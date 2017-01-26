import React from 'react';
import {Link} from 'react-router';

class App extends React.Component {

  render(){
    return (
      <div>
      <h1><Link to="/">Unoffical Github Browser</Link></h1>
      {this.props.children}
      </div>
    );
  }
}

export default App;
