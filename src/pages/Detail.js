import React from 'react';
import Chance from 'chance';

class Detail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: chance.first(),
      country: chance.country({full: true}),
      clicks: 0
    };
  }

  countClick(){
    this.setState({
      clicks: this.state.clicks + 1
    });
  }
  checkName() {
    if (this.state.name === "John"){
      return "Oh, Hi John";
    }
    else {
      return "oh, sorry, I thought you were John";
    }
  }
  buttonClicked() {
    this.forceUpdate();
  }

  render() {
    return (
      <div>
       <p>{this.checkName()}!</p>
        <p>Hello, {this.state.name}.</p>
        <p>Youre from {this.state.country}.</p>
        <button onClick={this.buttonClicked.bind(this)}>Meet Someone New</button>
        <p>there has been {this.state.clicks} clicks</p>
        <button onClick={this.countClick}>Add to clicks</button>
      </div>);
  }
}

export default Detail;
