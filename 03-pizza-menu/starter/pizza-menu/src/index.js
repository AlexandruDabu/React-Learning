import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './HomePage/Header';
import Footer from './HomePage/Footer';
import Menu from './HomePage/Menu';
import './index.css';

function App() {
    return <div className="container">
        <Header/>
            <Menu/>
        <Footer/>
        </div>
    }


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);