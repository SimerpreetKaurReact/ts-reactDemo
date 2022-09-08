import React, { useContext } from 'react'
import Todo from '../models/todo'
import { TodoContext } from '../store/todoContext'
import SingleTodo from './SingleTodo'
//We are using a generic type here, not creating one, react.fc is a prviously creayed ty0pe 
import classes from "./Todos.module.css"
const Todos: React.FC = (props) => {
    const todosCtx = useContext(TodoContext)
    return (
        <ul className={classes.todos}>
            {todosCtx.items.map((item => (<SingleTodo key={item.id} id={item.id} text={item.text} handleRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} />)))}
        </ul>
    )
}
// const Todos: React.FC<{ items: Todo[], children?: React.ReactNode, handleRemoveTodo: (todoId: string) => void }> = (props) => {
//     return (
//         <ul className={classes.todos}>
//             {props.items.map((item => (<SingleTodo key={item.id} id={item.id} text={item.text} handleRemoveTodo={props.handleRemoveTodo.bind(null, item.id)} />)))}
//         </ul>
//     )
// }
export default Todos

//without REact.Fc
// import { ReactNode } from 'react';
// type AppProps = {
//     message: string;
//     children?: ReactNode;
// };
// const App = ({ message, children }: AppProps) => <div>{children}</div>;
// or without destructuring:
// import { ReactNode } from 'react';
// type AppProps = {
//     message: string;
//     children?: ReactNode;
// };
// const App = (props: AppProps) => <div>{props.children}</div>