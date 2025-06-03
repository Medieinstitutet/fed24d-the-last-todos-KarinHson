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

    return (
        <>
        <AddTodo addTodo={addTodo}></AddTodo>
        <Todos todos={todoList} onDelete={handleDelete} onToggleDone={handleToggleDone}></Todos>       
        </>
    )
}