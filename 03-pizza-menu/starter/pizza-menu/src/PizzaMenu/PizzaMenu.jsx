import React from "react"
function PizzaMenu({pizza}) {
    return (<li className={pizza.soldOut ? "pizza sold-out" : "pizza"}>
            <img src={pizza.photoName} alt={pizza.name}></img>
            <div>
                <h3>{pizza.name}</h3>
                <p>{pizza.ingredients}</p>
                <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
            </div>
        </li>)
}
export default PizzaMenu;