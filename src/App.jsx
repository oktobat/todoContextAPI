import React from 'react';
import { useTodosState, useTodosDispatch } from './context/todoContext';
import TodoTemplete from './components/TodoTemplate'
import TodoHeader from './components/TodoHeader'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

const App = () => {

  const todos = useTodosState();
  const { onInsert } = useTodosDispatch();

  return (
    <TodoTemplete>
      <TodoHeader todos={todos} />
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
      <TodoFooter />
    </TodoTemplete>
  );
};

export default App;