import { useState } from "react";

const Todos = () => {
    const [todos, setTodos] = useState(['Go to office']);
    const [todo, setTodo] = useState('');

    return(
        <div>
            <p>Todos</p>

            <ul>
                {
                    todos.map((todo, idx) => {
                        return <li key={idx}>{todo}</li>
                    })
                }
            </ul>

            <input type="text" placeholder="Enter todo"
                value={todo} 
                onChange={(e) => setTodo(e.target.value)}/>

            <button onClick={() => {
                setTodos([...todos, todo]);
                setTodo('');
            }}>Add</button>
        </div>
    );
}

export default Todos;