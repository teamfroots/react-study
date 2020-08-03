import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    welcome: "",
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <h2></h2>
        <input
          type="text"
          name="welcome"
          value={this.state.welcome}
          onChange={(e) => {
            this.setState({ welcome: e.target.value });
          }}
        ></input>
        <button
          onClick={() => {
            this.setState({ welcome: "" });
            console.log(this.state.welcome);
            const h2 = document.querySelector("h2");
            h2.innerText = this.state.welcome;
          }}
        >
          enter
        </button>
      </div>
    );
  }
}

export default EventPractice;
