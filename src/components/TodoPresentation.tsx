import type { Todo } from "../models/Todo"


type TodoPresentationProps = {
    todo: Todo
    onDelete: (id: number) => void;
}

export const TodoPresentation = ({todo, onDelete}: TodoPresentationProps) => {


    const deleteTodo = () => {
        onDelete(todo.id)
    }

    return (
        <div className="todo">
            <div className="done-content">
                <label> Är färdig:
                <input type="checkbox" checked={todo.isDone}/>
                </label>
                 <h2>{todo.content}</h2>
            </div>
            <p>Skapades: {todo.created_at.toLocaleString()}</p>
            <button onClick={deleteTodo}>Ta bort</button>
        </div>
    )
}