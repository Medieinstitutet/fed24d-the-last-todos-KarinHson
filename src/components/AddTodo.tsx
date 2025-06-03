import { useState, type ChangeEvent, type FormEvent } from "react"
import { Todo } from "../models/Todo"


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
        <form onSubmit={handleSubmit}>
            <label> Vad behövs göras?
                <input type="text" id="content" value={content} onChange={handleChange}/>
            </label>
            <button>Lägg till</button>

        </form>
    )
}