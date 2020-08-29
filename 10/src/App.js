import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoLIst from './components/TodoLIst';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoLIst />
    </TodoTemplate>
  );
};

export default App;
