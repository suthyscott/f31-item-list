import { useState } from "react"

const InventoryItem = ({item, deleteItem, index, editItem}) => {
    const [editing, setEditing] = useState(false)
    const [itemName, setItemName] = useState(item)

    // if(editing){
    //     // then do this
    // } else {
    //     // otherwise do this
    // }

    // editing ? console.log('then do this') : console.log('do this instead')

    const onHandleSubmit = e => {
        e.preventDefault()
        editItem(itemName, index)
        setEditing(false)
    }
    const handleCancelEdit = () => {
        setEditing(false)
        setItemName(item)
    }

    return (
        <div className="inventory-item">
            { editing ? (
                <form onSubmit={e => onHandleSubmit(e)}>
                    <input value={itemName} onChange={e => setItemName(e.target.value)}/>
                    <button>Submit Changes</button>

                    <button onClick={() => handleCancelEdit()}>Cancel</button>
                </form>
            ) : (
                <div>
                    <h3>{item}</h3>
                    <button onClick={() => deleteItem(index)}>Delete Item</button>
                    <button onClick={() => setEditing(true)}>Edit Item</button>
                </div>
            )}
        </div>
    )
}

export default InventoryItem