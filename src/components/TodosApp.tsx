import { useState } from "react"
import { AddTodo } from "./AddTodo"
import { Todos } from "./Todos"
import { Todo } from "../models/Todo"
import './TodosApp.css'

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
        <h1>Todo app!</h1>
        <AddTodo addTodo={addTodo}></AddTodo>
        <label>Sortera:
              <select value={sortOrder ?? ""} onChange={(e) => {
               const value = e.target.value;
               SetSortOrder(value === "" ? null : value as 'asc' | 'desc');
               }}>
                <option value="">Sortera</option>
                <option value="asc">A-Ö</option>
                <option value="desc">Ö-A</option>
            </select>
        </label>
        <Todos todos={sortedTodos} onDelete={handleDelete} onToggleDone={handleToggleDone}></Todos>       
        </>
    )
}