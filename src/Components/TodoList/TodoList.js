import './TodoList.css';
import Todo from '../Todo/Todo';

function TodoList({ todos , settodos }){
    function ondeletetodo(id){
        const newtodolist = todos.filter(todo => todo.id != id);
        settodos(newtodolist);
    }

    function onedittodo(id , newtodo){
        const newtodolist = todos.map(todo => {
            if(todo.id == id){
                todo.text = newtodo;
            }
            return todo;
        });
        settodos(newtodolist);
    }

    function onfinishtodo(id ,state){
        const newtodolist = todos.map(todo => {
            if(todo.id == id){
                todo.isfinished = state;
            }
            return todo;
        })
        settodos(newtodolist);
    }

    return (
        <div>
            {todos && todos.map((todo)=> 
            <Todo 
                key={todo.id} 
                text={todo.text} 
                isfinished={todo.isfinished} 
                edittodo = {(newtodo) => onedittodo(todo.id , newtodo)}
                deletetodo = {() => ondeletetodo(todo.id)}
                finishtodo = {(state)=> onfinishtodo(todo.id , state)}
            />)}
        </div>
    )
}

export default TodoList;