import { useState } from "react"
import { AddTodo } from "./AddTodo"
import { Todos } from "./Todos"
import { Todo } from "../models/Todo"

export const TodosApp = () => {

     const [todoList, setTodoList] = useState<Todo[]> (
        JSON.parse(localStorage.getItem("todos") || JSON.stringify(
            [
            new Todo('Så plantor', new Date(), false),
            new Todo('Vattna plantor', new Date(), false),
            new Todo('Rensa ogräs', new Date(), false),
        ]
        )))

    const [sortOrder, SetSortOrder] = useState<'asc' | 'desc' | null>(null)

    const handleDelete = (id: string) => {
        setTodoList(todoList.filter(todo => todo.id !== id));
    };

     const handleToggleDone = (id: string) => {
        setTodoList(todoList.map(todo => 
            todo.id === id ? {...todo, isDone: !todo.isDone} : todo
        ));
    };

    localStorage.setItem("todos", JSON.stringify(todoList));
    console.log(todoList);


    const addTodo = (t: Todo) => {
        setTodoList([...todoList, t])
    }

    const sortedTodos = sortOrder ? [...todoList].sort((a, b) =>
    sortOrder === 'asc'
    ? a.content.localeCompare(b.content)
    : b.content.localeCompare(a.content)
    ) : todoList;

    return (
        <>
        <h1 className="flex justify-center text-4xl sm:text-5xl md:text-6xl">Todo app!</h1>
        <AddTodo addTodo={addTodo}></AddTodo>
              <select className="ml-6 mb-6 w-[30vw] bg-white text-black border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-pink-300" value={sortOrder ?? ""} onChange={(e) => {
               const value = e.target.value;
               SetSortOrder(value === "" ? null : value as 'asc' | 'desc');
               }}
               aria-label="Sortera">
                <option value="">Sortera</option>
                <option value="asc">A-Ö</option>
                <option value="desc">Ö-A</option>
            </select>
        <Todos todos={sortedTodos} onDelete={handleDelete} onToggleDone={handleToggleDone}></Todos>       
        </>
    )
}