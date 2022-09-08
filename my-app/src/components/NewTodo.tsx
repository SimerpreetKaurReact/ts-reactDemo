import React, { useRef } from 'react'

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const enteredText = inputRef.current!.value
        //current value will not be null here, so now enteredText can now be infered to be string instead of undefind previously
        if (enteredText.trim().length === 0) {
            // throw error
            return
        }
        props.onAddTodo(enteredText)
    }
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='text'>Todo</label>
            <input type="text" id="text" ref={inputRef} />
            <button>Add todo</button>
        </form>
    )
}

export default NewTodo