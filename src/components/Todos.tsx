import { Todo } from "../models/Todo"
import { TodoPresentation } from "./TodoPresentation"


type TodoProps = {
    todos: Todo[]
    onDelete: (id: number) => void;
    onToggleDone: (id: number) => void;
}

export const Todos= ({todos, onDelete, onToggleDone}: TodoProps) => {

    

    return (
        <div className="todos">
        {todos.map((t) => (
            <TodoPresentation key={t.id} todo={t} onDelete={onDelete} onToggleDone={onToggleDone}></TodoPresentation>

        ))}
        </div>
    )
}