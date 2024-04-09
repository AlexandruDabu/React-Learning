import initialItems from "../data"
import { useState } from "react"

function Item({item, onDelete}){
    
    function handleRemove(e){
        e.preventDefault();
        onDelete(item.id);
    }

    return <li><span style ={item.packed ? {textDecoration: 'line-through'} : {}}>
        {item.quantity} {item.description}
        </span>
        <button onClick={handleRemove}>❌</button>
        </li>
}

function PackingList({items, onDelete}) {
    return( 
    <div className="list">
        <ul>
            {items.map((item) =>
            (<Item item={item} onDelete={onDelete} key={item.id}/>))}
        </ul>
    </div>
    )
}
export default PackingList