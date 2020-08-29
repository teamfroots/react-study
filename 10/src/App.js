import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList.js';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: '까망이 밥주기', checked: true },
    { id: 2, text: '청소하기', checked: true },
    { id: 3, text: '빨래하기', checked: false },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1; // nextId 1씩 더하기
  });

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
