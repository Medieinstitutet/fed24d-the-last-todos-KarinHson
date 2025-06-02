import type { Todo } from "../models/Todo"


type TodoPresentationProps = {
    todo: Todo
}

export const TodoPresentation = ({todo}: TodoPresentationProps) => {

    return (
        <div className="todo">
            <div className="done-content">
                <label> Är färdig:
                <input type="checkbox" checked={todo.isDone}/>
                </label>
                 <h2>{todo.content}</h2>
            </div>
            <p>Skapades: {todo.created_at.toLocaleString()}</p>
            <button>Ta bort</button>
        </div>
    )
}