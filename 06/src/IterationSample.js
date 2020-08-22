import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  //새로운 항목을 추가할때의 id : 5

  const onChange = (e) => setInputText(e.target.value);

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  //   filter, concat 다시 복습하기

  const nameLists = names.map((name) => (
    <li key={names.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  console.log(names);

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameLists}</ul>
    </>
  );
};

export default IterationSample;
