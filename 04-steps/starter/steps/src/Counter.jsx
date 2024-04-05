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
                    <button onClick={() => setStep((s) => s+1)}> - </button>
                    <p>Step: {step}</p>
                    <button onClick={() => setStep((s) => s-1)}> + </button>
                </div>
                <button onClick={() => setCount((s) => s-step)}> - </button>
                <p className="message">Count: {count}</p>
                <button onClick={() => setCount((s) => s+step)}> + </button>
                <h1 className="message"><span>{count === 0 ? 'Today is ' : `${count} days from today is `}</span>{date.toDateString()}</h1>

            </div>
        </>
    )
}

export default Counter;