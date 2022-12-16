import './App.css';
import { useState } from 'react';
import InventoryItem from './InventoryItem';
import Form from './Form'

const items = ['watch', 'book', 'pot', 'water bottle', 'laptop','Picture frame', 'table']

function App() {
    const [inventory, setInventory] = useState(items)

    const addItem = item => {
      setInventory([...inventory, item])
    }

    const deleteItem = index => {
      console.log('hit delete item', index)
      let newInventory = inventory.filter((item, itemIndex) => itemIndex !== index)
      setInventory(newInventory)
    }

    const editItem = (newItemName, index) => {
      inventory.splice(index, 1, newItemName)
      console.log(inventory)
      setInventory([...inventory])
    }
    
  return (
    <div className="App">
      <Form addItem={addItem}/>

      {inventory.map((item,index)=>{
        console.log(`this is iteration ${index}`, 'and the item is', item)
        return <InventoryItem item={item} deleteItem={deleteItem} index={index} key={index} editItem={editItem}/>
      })}

    </div>
  );
}

export default App;
