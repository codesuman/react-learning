import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'update_draft': {
            return {
                ...state,
                draft: action.nextDraft
            }
        };
        case 'add_todo': {
            return {
                draft: '',
                todos: [
                    {
                        id: state.todos.length,
                        desc: state.draft
                    },
                    ...state.todos
                ]
            }
        };
    }
}

const Todos = () => {
    const [state, dispatch] = useReducer(reducer, {draft: '', todos: []});

    return(
        <div>
            <p>Todos</p>

            <ul>
                {
                    state.todos.map((todo) => {
                        return <li key={todo.id}>{todo.desc}</li>
                    })
                }
            </ul>

            <input type="text" placeholder="Enter todo"
                value={state.draft} 
                onChange={(e) => dispatch({
                    type: 'update_draft',
                    nextDraft: e.target.value
                })}/>

            <button onClick={() => {
                dispatch({
                    type: 'add_todo'
                })
            }}>Add</button>
        </div>
    );
}

export default Todos;