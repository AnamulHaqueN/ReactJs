import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild/InputFeild';
import { Todo } from './components/model';
import TodoList from './components/TodoList/TodoList';

const App:React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if(todo) {
        setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
        setTodo("");
      }
  };
  console.log(todos);

  return (
    <div className="App">
      <span className = "heading">Taskify</span>
      <InputFeild todo = {todo} setTodo = {setTodo} handleSubmit = {handleSubmit} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
