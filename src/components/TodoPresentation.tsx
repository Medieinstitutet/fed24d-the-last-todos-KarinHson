import type { Todo } from "../models/Todo"


type TodoPresentationProps = {
    todo: Todo
    onDelete: (id: string) => void;
    onToggleDone: (id: string) => void;
}

export const TodoPresentation = ({todo, onDelete, onToggleDone}: TodoPresentationProps) => {


    const deleteTodo = () => {
        onDelete(todo.id)
    }

       const toggleDone = () => {
        onToggleDone(todo.id);
    };

    return (
        <li className={`todo ${todo.isDone ? 'done': ''}`}>
            <div className="done-content">
                <label> Är färdig:
                <input type="checkbox" checked={todo.isDone} onChange={toggleDone}/>
                </label>
                 <h2>{todo.content}</h2>
            </div>
            <p>Skapades: {todo.created_at.toLocaleString()}</p>
            <button onClick={deleteTodo}>Ta bort</button>
        </li>
    )
}