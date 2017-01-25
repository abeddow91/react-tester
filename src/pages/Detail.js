import React from 'react';
import Chance from 'chance';

class Detail extends React.Component {
  checkName() {
    if (chance.first() === "John"){
      return "Oh, Hi John";
    }
    else {
      return "oh, sorry, I thought you were John";
    }
  }
  render() {
    return(
      <p>{this.checkName()}!</p>
    );
  }
}

export default Detail;
