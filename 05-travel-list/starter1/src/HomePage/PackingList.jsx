import initialItems from "../data"
import { useState } from "react"

function Item({item, onDelete, onToggle}){
    
    function handleRemove(e){
        e.preventDefault();
        onDelete(item.id);
    }

    return <li>
        <input type='checkbox' value={item.packed} onChange={() => onToggle(item.id)}/>
        <span style ={item.packed ? {textDecoration: 'line-through'} : {}}>
        {item.quantity} {item.description}
        </span>
        <button onClick={handleRemove}>❌</button>
        </li>
}

function PackingList({items, onDelete, onToggle}) {
    return( 
    <div className="list">
        <ul>
            {items.map((item) =>
            (<Item onToggle={onToggle} item={item} onDelete={onDelete} key={item.id}/>))}
        </ul>
    </div>
    )
}
export default PackingList