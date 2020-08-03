import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    welcome: "",
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      welcome: e.target.value,
    });
  }

  handleClick() {
    this.setState({ welcome: "" });
    console.log(this.state.welcome);
    const h2 = document.querySelector("h2");
    h2.innerText = this.state.welcome;
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <h2></h2>
        <input
          type="text"
          name="welcome"
          value={this.state.welcome}
          onChange={this.handleChange}
        ></input>
        <button onClick={this.handleClick}>enter</button>
      </div>
    );
  }
}

export default EventPractice;
