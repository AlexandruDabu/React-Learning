import React, { useState } from "react";

function Counter() {
    const [count,setCount] = useState(0);
    const [step, setStep] = useState(1);
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + count);
    return (
        <>
            <div className="steps">
                <div className="message">
                    <input type="range" min="0" max="10" value={step} onChange={(e) => setStep(Number(e.target.value))}/>
                    <p>Step: {step}</p>
                </div>
                <button onClick={() => setCount((s) => s-step)}> - </button>
                <input type='text' value={count} onChange={(e) => setCount(e.target.value)}></input>
                <p>Count: {count}</p>
                <button onClick={() => setCount((s) => s+Number(step))}> + </button>
                <h1 className="message"><span>{count === 0 ? 'Today is ' : `${count} days from today is `}</span>{date.toDateString()}</h1>
                <button onClick={() => {setCount(0); setStep(1)}}>Reset</button>
            </div>
        </>
    )
}

export default Counter;