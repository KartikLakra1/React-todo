import { useState } from 'react';
import './App.css';
import AddTodo from './Components/AddTodo/AddTodo';
import TodoList from './Components/TodoList/TodoList.js';

function App() {

  const [todos , settodos] = useState([
    {id : 1, text: "todo 1" , isfinished: true},
    {id : 2, text: "todo 2" , isfinished : false}
  ])

  function addtodo(todotext){
    let nextid = todos.length + 1;
    settodos([...todos , {id : nextid , isfinished : false , text: todotext}]);
  }


  return (
    <div>
      <AddTodo addtodo={addtodo} />
      <TodoList todos = {todos} settodos={settodos} />
    </div>
  );
}

export default App;
