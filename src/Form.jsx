import { useState } from "react"

const Form = ({addItem}) => {
    const [userInput, setUserInput] = useState('')
    console.log(userInput)

    const submitHandler = e => {
        e.preventDefault()
        addItem(userInput)
        setUserInput('')
    }

    return (
        <form onSubmit={e => submitHandler(e)}>
            <h2>Add new item here!</h2>
            <input value={userInput} placeholder="Type new item here" onChange={e => setUserInput(e.target.value)}/>
            <button>Add Item</button>
        </form>
    )
}

export default Form