import { useState } from 'react';
import './Todo.css';

function Todo({finishtodo , edittodo, text , isfinished , deletetodo}){

    const [iseditting , setisediting] = useState(false);
    const [todotext , settodotext] = useState(text);

    return (
        <div>
            <input type="checkbox" checked = {isfinished} onChange={() => finishtodo(!isfinished) } />
            {iseditting ? <input value={todotext} onChange={(e) => settodotext(e.target.value)} /> : <span> {todotext} </span>}
            <button onClick={() => {
                setisediting(!iseditting);
                edittodo(todotext);
            }}>{iseditting ? 'save' : "edit"}</button>
            <button onClick={deletetodo}>Delete</button>
        
        </div>
    )
}

export default Todo;