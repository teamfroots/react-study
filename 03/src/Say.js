import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("똑똒");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히가세요!");

  const [color, setColor] = useState("black");

  return (
    <div>
      <h1 style={{ color }}>{message}</h1>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <button onClick={() => setColor("red")}>빨강</button>
      <button onClick={() => setColor("black")}>리셋</button>
    </div>
  );
};

export default Say;
