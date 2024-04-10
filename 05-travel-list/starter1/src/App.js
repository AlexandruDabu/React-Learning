import React from "react";
import Logo from "./HomePage/Logo";
import Form from "./HomePage/Form";
import PackingList from "./HomePage/PackingList";
import Stats from "./HomePage/Stats";
import { useState } from "react";
function App() {
    const [items, setItems] = useState([]);

    function handleAdd(item) {
        setItems((items) => [...items, item])
    }

    function handleRemove(id) {
        setItems((items) => [...items].filter((item) => item.id !== id));
    }

    function handleToggleItem(id) {
        setItems((items) => items.map((item) => item.id === id ? {...item, packed: !item.packed} : item ))
    }

    return(
        <div className="app">
        <Logo/>
        <Form onAddItems={handleAdd}/>
        <PackingList items={items} onDelete={handleRemove} onToggle ={handleToggleItem}/>
        <Stats/>
        </div>
    )
}
export default App;