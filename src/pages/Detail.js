import React from 'react';
//you can use whatever you want instead of ajax, such as request.
import ajax from 'superagent';

class Detail extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      commits: []
     };
  }


//n.b SuperAgent code is asynchronous so the anonymous function will only run nce it is finished getting github's response
//Also, response.body is supoerageny magic - it has detected that github responded with content type "application/json" and automatically converted githubs response into javascript objects which is why we can sent response.body straight into our state, as it is already a javascript array of objects ready to use. 
// is the name of the method and needs to be named exactly this in order for React to call it.
  componentWillMount() {
    //tells SuperAgent to fetch the list of commits to the React project from Github
    ajax.get('https://api.github.com/repos/facebook/react/commits')
    //tells SuperAgent what to do when the request finishes it should run the anonymous function that follows
        .end((error, response) => {
          // starts a conditional statement: the following should run only when there is no error and there was a response from the server.
          if (!error && response) {
          // updates our component's state using the body value of the SuperAgent response
            this.setState({commits: response.body});
          } else {
            console.log('There was an error fetching from GitHub', error);
          }
        }
      );
  }

  render() {
    return (
      <div>
      {this.state.commits.map((commit, index) => (
        <p key={index}>some data here.</p>
      ))}
      </div>);
  }
}

export default Detail;
