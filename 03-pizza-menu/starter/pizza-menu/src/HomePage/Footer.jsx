import React from "react";

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return <footer className="footer">
            {isOpen ? 
            <div className="order">
                <p>We're open until {closeHour}:00. Come visit us or order online.</p>   
                <button className="btn">Order</button>
            </div>
        : 
            <p>We're currently closed. Please come back tomorrow after {openHour}:00</p>}
            
    </footer>
}

export default Footer;