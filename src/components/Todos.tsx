import { Todo } from "../models/Todo"
import { TodoPresentation } from "./TodoPresentation"

export const Todos= () => {

    const todoList: Todo[] = [
        new Todo('Så plantor', new Date(), false),
        new Todo('Vattna plantor', new Date(), false),
        new Todo('Rensa ogräs', new Date(), false)

    ]

    return (
        <div className="todos">
        {todoList.map((t) => (
            <TodoPresentation key={t.id} todo={t}></TodoPresentation>

        ))}
        </div>
    )
}