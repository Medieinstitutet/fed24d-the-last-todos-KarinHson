import { useState, type ChangeEvent, type FormEvent } from "react"
import { Todo } from "../models/Todo"
import './AddTodo.css'

type AddTodoProps = {
    addTodo: (t: Todo) => void
}

export const AddTodo = ({addTodo}: AddTodoProps) => {

    const [content, setContent] = useState("");
    // const [todo, setTodo] = useState<Todo>(new Todo("", new Date(), false))

    const handleChange = (e: ChangeEvent <HTMLInputElement>) => {
        setContent(e.target.value);

        // setTodo({...todo, [e.target.id]: e.target.value});
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // validera att content inte är tomt
        if (content.trim() === "") return;


        const newTodo = new Todo(content, new Date());
        addTodo(newTodo);
        setContent("");
    }

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <label className="text-xl flex flex-col items-center"> Vad behövs göras?
                <input type="text" id="content" value={content} onChange={handleChange} className="bg-white text-black border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-pink-300"/>
            </label>
            <button className=" bg-pink-300 hover:bg-pink-400 text-white  px-4 py-2 rounded self-center">Lägg till</button>

        </form>
    )
}