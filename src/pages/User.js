import React from 'react';
import ajax from 'superagent';


class User extends React.Component {
  constructor(){
    super();
    this.state ={
      details:[]
    };

  }
componentWillMount(){
  ajax.get(`https://api.github.com/users/${this.props.params.username}/events`)
      .end((error, response) => {
        if (!error && response) {
          this.setState({details: response.body})
          console.log("test test test");
          console.log(this.state.details);
        } else {
          console.log("Sorry, there was an error pulling the user data from GitHub.")
        }
      });
}
renderUser(){
  return this.state.details.map((user,index)=>(
    <div key={index}>
      <strong>{user.payload.push_id}</strong>
    </div>
  ));
}

  render(){
    return (<div>
      <p>Page for {this.props.params.username} </p>
      {this.renderUser()}
      </div>);
  }
}

export default User;
