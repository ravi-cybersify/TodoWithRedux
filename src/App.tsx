import React from 'react';
import './App.css';
import Todo from './components/Todo';
import { Route,Routes } from 'react-router-dom';
import TodoTask from './components/TodoTask';
import AllTask from './components/AllTask';

const App:React.FC = ()=> {
  return (
   <Routes>
      <Route path={'/'} element={<TodoTask />} />
      <Route path={'/createTodo'} element={<Todo />} />
      <Route path={'/allTodo'} element={<AllTask />} />
   </Routes>
  );
}

export default App;
