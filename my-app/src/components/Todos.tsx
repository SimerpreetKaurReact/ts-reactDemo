import React from 'react'
import Todo from '../models/todo'
import SingleTodo from './SingleTodo'
//We are using a generic type here, not creating one, react.fc is a prviously creayed ty0pe 

const Todos: React.FC<{ items: Todo[], children?: React.ReactNode }> = (props) => {
    return (
        <ul>
            {props.items.map((item => (<SingleTodo key={item.id} id={item.id} text={item.text} />)))}
        </ul>
    )
}

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