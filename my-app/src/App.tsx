
import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';
import TodoContextProvider from './store/todoContext';

function App() {

  return (
    <TodoContextProvider>
      <div className="App">

        <NewTodo />
        <Todos />
      </div>
    </TodoContextProvider>
  );
}

export default App;
