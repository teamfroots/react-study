// import React, { Component } from "react";

// class EventPractice extends Component {
//   state = {
//     username: "",
//     welcome: "",
//   };

//   /* 훨씬 깔끔하게 정리한 방법. 화살표 함수 형태로 메서드 정의하기 */
//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleClick = () => {
//     this.setState({ welcome: "", username: "" });
//     console.log(this.state.welcome);
//     const h2 = document.querySelector("h2");
//     h2.innerText = this.state.username + " : " + this.state.welcome;
//   };

//   handleKeyPress = (e) => {
//     if (e.key === "enter") {
//       this.handleClick();
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <h2></h2>
//         name:
//         <input
//           type="text"
//           name="username"
//           value={this.state.username}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         ></input>
//         <br />
//         message:
//         <input
//           type="text"
//           name="welcome"
//           value={this.state.welcome}
//           onChange={this.handleChange}
//           onKeyDown={this.handleKeyPress}
//         ></input>
//         <br />
//         <button onClick={this.handleClick}>enter</button>
//       </div>
//     );
//   }
// }

// export default EventPractice;

import React, { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form;
  const onChange = (e) => {
    const nestForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nestForm);
  };

  // const [username, setUsername] = useState("");
  // const [message, setMessage] = useState("");
  // const onChangeUsername = (e) => setUsername(e.target.value);
  // const onChangerMessage = (e) => setMessage(e.target.value);

  const onClick = () => {
    alert(username + ":" + message);
    // setUsername("");
    // setMessage("");
    setForm({ username: "", message: "" });
  };

  const onKeyPress = (e) => {
    if (e.key === "enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <h2></h2>
      name:
      <input
        type="text"
        name="username"
        value={username}
        onChange={onChange}
      ></input>
      <br />
      message:
      <input
        type="text"
        name="message"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>
      <br />
      <button onClick={onClick}>enter</button>
    </div>
  );
};

export default EventPractice;
