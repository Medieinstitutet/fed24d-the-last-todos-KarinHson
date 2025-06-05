import type { Todo } from "../models/Todo"


type TodoPresentationProps = {
    todo: Todo
    onDelete: (id: string) => void;
    onToggleDone: (id: string) => void;
}

export const TodoPresentation = ({todo, onDelete, onToggleDone}: TodoPresentationProps) => {


    const deleteTodo = () => {
        onDelete(todo.id)
    }

       const toggleDone = () => {
        onToggleDone(todo.id);
    };

    return (
        <li className="bg-pink-200 border-[2px] border-pink-300 rounded px-2 py-1 
                list-none 
                basis-full sm:basis-[45%] 
                max-w-full sm:max-w-[45%]">
            <div className="flex items-center gap-4">
                <input type="checkbox" className="w-6 h-6 shrink-0" checked={todo.isDone} onChange={toggleDone} aria-label="Klicka i när uppgiften är klar" title="Klicka i när uppgiften är klar"/>
                 <h2 className={`text-2xl break-all flex-1 ${todo.isDone ? "line-through text-gray-500" : ""}`}>{todo.content}</h2>
            </div>
            <p className="italic">Skapades: {todo.created_at.toLocaleString()}</p>
            <button onClick={deleteTodo} className="mt-2 bg-pink-300 hover:bg-pink-400 text-white py-1 px-3 rounded" >Ta bort</button>
        </li>
    )
}