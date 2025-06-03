import { useState, type ChangeEvent, type FormEvent } from "react"
import { Todo } from "../models/Todo"


type AddTodoProps = {
    addTodo: (t: Todo) => void
}

export const AddTodo = ({addTodo}: AddTodoProps) => {

    const [todoList, setTodoList] = useState<Todo>(new Todo(0, "", new Date(), false))

    const handleChange = (e: ChangeEvent <HTMLInputElement>) => {

        setTodoList({...todoList, [e.target.id]: e.target.value});
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        addTodo(todoList);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> Vad behövs göras?
                <input type="text" id="content" onChange={handleChange}/>
            </label>
            <button>Lägg till</button>

        </form>
    )
}