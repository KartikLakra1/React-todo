import { useState } from "react";


function AddTodo({ addtodo }){

    const [todotext , settodotext] = useState('');

    return(
        <div>

        <input 
        placeholder="add your next task .."
        onChange={(e) => settodotext(e.target.value)}
        value = {todotext}
        />

        <button onClick={() => {
            if(todotext != ""){
                addtodo(todotext);
                settodotext('');
            }
        }}>submit</button>

        </div>

    )
}

export default AddTodo;