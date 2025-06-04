import { Todo } from "../models/Todo"
import { TodoPresentation } from "./TodoPresentation"
import './Todos.css'

type TodoProps = {
    todos: Todo[]
    onDelete: (id: string) => void;
    onToggleDone: (id: string) => void;
}

export const Todos= ({todos, onDelete, onToggleDone}: TodoProps) => {

    

    return (
        <ul className="todos">
        {todos.map((t) => (
            <TodoPresentation key={t.id} todo={t} onDelete={onDelete} onToggleDone={onToggleDone}></TodoPresentation>

        ))}
        </ul>
    )
}