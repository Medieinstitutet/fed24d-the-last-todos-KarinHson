import { Todo } from "../models/Todo"
import { TodoPresentation } from "./TodoPresentation"

type TodoProps = {
    todos: Todo[]
    onDelete: (id: string) => void;
    onToggleDone: (id: string) => void;
}

export const Todos= ({todos, onDelete, onToggleDone}: TodoProps) => {

    return (
        <ul className="flex flex-wrap gap-8 justify-center px-4 sm:px-0">
        {todos.map((t) => (
            <TodoPresentation key={t.id} todo={t} onDelete={onDelete} onToggleDone={onToggleDone}></TodoPresentation>

        ))}
        </ul>
    )
}