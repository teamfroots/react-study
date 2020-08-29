import React, { useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList.js';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: '까망이 밥주기', checked: true },
    { id: 2, text: '청소하기', checked: true },
    { id: 3, text: '빨래하기', checked: false },
  ]);
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
