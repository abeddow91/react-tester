import React from 'react';
import {Link} from 'react-router';
//you can use whatever you want instead of ajax, such as request.
import ajax from 'superagent';

class Detail extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      mode: 'commits',
      commits: [],
      pulls: [],
      forks: []
     };
  }

//n.b SuperAgent code is asynchronous so the anonymous function will only run nce it is finished getting github's response
//Also, response.body is supoerageny magic - it has detected that github responded with content type "application/json" and automatically converted githubs response into javascript objects which is why we can sent response.body straight into our state, as it is already a javascript array of objects ready to use.
// is the name of the method and needs to be named exactly this in order for React to call it.

fetchFeed(type){
  const baseURL = 'https://api.github.com/repos/facebook';
  //   //tells SuperAgent to fetch the list of commits to the React project from Github
  ajax.get(`${baseURL}/${this.props.params.repo}/${type}`)
  //   //tells SuperAgent what to do when the request finishes it should run the anonymous function that follows
      .end((error,response) => {
  // starts a conditional statement: the following should run only when there is no error and there was a response from the server.
        if (!error && response) {
// updates our component's state using the body value of the SuperAgent response
          this.setState({ [type]: response.body} );
        } else{
          console.log(`There was an error fetching ${type} from GitHub`, error);
        }
    });
}


  componentWillMount() {
    this.fetchFeed('commits');
    this.fetchFeed('pulls');
    this.fetchFeed('forks');
  }

  renderCommits() {
      return this.state.commits.map((commit, index) => {
          const author = commit.author ? commit.author.login : 'Anonymous';

          return (<p key={index}>
              <strong><Link to={`/user/${author}`}>{author}</Link></strong>:
              <a href={commit.html_url}>{commit.commit.message}</a>.
          </p>);
      });
  }

      renderForks() {
          return this.state.forks.map((fork, index) => {
              const owner = fork.owner ? fork.owner.login : 'Anonymous';

              return (<p key={index}>
                  <strong><Link to={`/user/${owner}`}>{owner}</Link></strong>: forked to
                  <a href={fork.html_url}>{fork.html_url}</a> at {fork.created_at}.
              </p>);
          });
      }

renderPulls() {
  return this.state.pulls.map((pull, index)=>{
    const user = pull.user ? pull.user.login : 'Anonymous';

    return (<p key={index}>
      <strong><Link to={`/user/${user}`}>{user}</Link></strong>:
      <a href={pull.html_url}>{pull.title}</a>
      <p>State: {pull.state}</p>
      </p>)
  });
}

selectMode(mode){
  this.setState({ mode: mode});
}

render() {
   let content;

    if (this.state.mode === 'commits') {
        content = this.renderCommits();
    } else if (this.state.mode === 'forks') {
        content = this.renderForks();
    } else {
        content = this.renderPulls();
    }

    return (<div>
      <button onClick={this.selectMode.bind(this, 'commits')}>Show Commits</button>
      <button onClick={this.selectMode.bind(this, 'pulls')}>Show Pulls</button>
      <button onClick={this.selectMode.bind(this, 'forks')}>Show Forks</button>
      {content}
      </div>);
  }
}

export default Detail;
