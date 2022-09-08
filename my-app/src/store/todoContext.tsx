import React, { useState } from "react"
import Todo from "../models/todo"
type todoContextObj = { items: Todo[]; addTodo: (text: string) => void; removeTodo: (id: string) => void }
type Props = { children?: React.ReactNode }
export const TodoContext = React.createContext<todoContextObj>({
    items: [], addTodo: () => { }, removeTodo: (id: string) => { }
})
const TodoContextProvider: React.FC<Props> = props => {
    const [todos, setTodos] = useState<Todo[]>([])
    const onAddTodo = (text: string) => {
        const newTodo = new Todo(text)
        setTodos(prevTodo => prevTodo.concat(newTodo))
        console.log(todos)
    }
    const handleRemoveTodo = (todoId: string) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.id !== todoId)
        })
    }
    const contextValue: todoContextObj = { items: todos, addTodo: onAddTodo, removeTodo: handleRemoveTodo }
    return <TodoContext.Provider value={contextValue}>{props.children}</TodoContext.Provider>
}
export default TodoContextProvider