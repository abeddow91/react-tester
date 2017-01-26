import React from 'react';
import ajax from 'superagent';


class User extends React.Component {
  constructor(){
    super();
    this.state ={
      user:[]
    };

  }
componentWillMount(){
  ajax.get(`https://api.github.com/users/${this.props.params.username}/events`)
      .end((error, response) => {
        if (!error && response) {
          this.setState({user: response.body})
        } else {
          console.log("Sorry, there was an error pulling the user data from GitHub.")
        }
      });
}


  render(){
    return <p>some text user</p>
  }
}

export default User;
