import {useState} from "react";
import Modal from './Modal.jsx';
function App() {
    const [isOpen, setIsOpen] = useState(true);
    function handleModal() {
        setIsOpen(!isOpen);
    }
    return ( 
    <>
        <button onClick={handleModal} className="close">&times;</button>
        { isOpen ? <Modal/> : <h1>Modal closed</h1> } 
    </>
    )
}

export default App;