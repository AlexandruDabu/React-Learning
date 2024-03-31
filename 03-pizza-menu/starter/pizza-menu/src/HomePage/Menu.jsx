import React from "react";
import PizzaMenu from "../PizzaMenu/PizzaMenu";
import pizzaData from '../data';

function Menu() {
    return <main className="menu">
        <h2>Our menu:</h2>
        {pizzaData.length ?
            <>
            <p>
            Authentic Italian Cuisine. 6 creative dishes to choose from.
            All from our stone oven, all organic, all delicious.
            </p> 
            <ul className="pizzas">
                {pizzaData.map((pizza) => 
                (<PizzaMenu key={pizza.name} pizza={pizza}/>))}
            </ul>
            </>
        : <h2>Currently we don't have any pizza available. We're sorry, you can come back tomorrow!</h2>
        }


    </main>
}

export default Menu;