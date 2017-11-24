// Code SimpleComponentHere Here
import React from "react";

class SimpleComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      mood: "happy"
    };
  }

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }

  handleClick = () => {
    if (this.state.mood === "happy") {
      this.setState({
        mood: "sad"
      });
    } else {
      this.setState({
        mood: "happy"
      });
    }
  };
}

export default SimpleComponent;
