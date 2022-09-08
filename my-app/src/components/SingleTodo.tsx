import React from 'react'
import classes from "./SingleTodo.module.css"

const SingleTodo: React.FC<{ id: string, text: string, handleRemoveTodo: () => void }> = (props) => {

    return (
        <li className={classes.item} key={props.id} onClick={props.handleRemoveTodo}>{props.text}</li>
    )
}

export default SingleTodo