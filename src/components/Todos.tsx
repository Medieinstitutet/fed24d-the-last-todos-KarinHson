import { useState } from "react"
import { Todo } from "../models/Todo"
import { TodoPresentation } from "./TodoPresentation"

export const Todos= () => {

    const [todoList, setTodoList] = useState<Todo[]> ([
        new Todo(1, 'Så plantor', new Date(), false),
        new Todo(2, 'Vattna plantor', new Date(), false),
        new Todo(3, 'Rensa ogräs', new Date(), false)

    ]);

    const handleDelete = (id: number) => {
        setTodoList(todoList.filter(todo => todo.id !== id));
    };

    return (
        <div className="todos">
        {todoList.map((t) => (
            <TodoPresentation key={t.id} todo={t} onDelete={handleDelete}></TodoPresentation>

        ))}
        </div>
    )
}