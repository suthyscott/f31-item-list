import './App.css';
import { useState } from 'react';
import InventoryItem from './InventoryItem';

const items = ['watch', 'book', 'pot', 'water bottle', 'laptop','Picture frame', 'table']

function App() {
    const [inventory, setInventory] = useState(items)


  return (
    <div className="App">
      {inventory.map((item,index)=>{
        console.log(`this is iteration ${index}`, 'and the item is', item)
        return <InventoryItem item={item}/>
      })}

      {/* <InventoryItem item={inventory[0]}/>
      <InventoryItem item={inventory[1]}/>
      <InventoryItem item={inventory[2]}/>
      <InventoryItem item={inventory[3]}/>
      <InventoryItem item={inventory[4]}/> */}
    </div>
  );
}

export default App;
