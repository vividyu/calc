import React, { useState } from "react";
function Calc() {
    const [display, setDisplay] = useState(0);
    const [preVal, setPreVal] = useState(0);
    const [curVal, setCurVal] = useState(0);
    const [inProcess, setInProcess] = useState(false);

    let initKeys = [];
    initKeys.push("AC");
    for (let i = 9; i >= 0; i--) {
        initKeys.push(i);
    }
    initKeys.push("+");
    initKeys.push("-");

    initKeys.push("x");
    initKeys.push("/");
    initKeys.push("=");

    function handleClick(item) {
        switch (item) {
            case "AC":
                setDisplay(0);
                setResult(0);
                setCurOperator("");
                break;
            case "+":
                const sum = result + display;
                setDisplay(sum);
                break;
            case "-":
                setCurOperator(item);
                break;
            case "x":
                setCurOperator(item);
                break;
            case "/":
                setCurOperator(item);
                break;
            case "=":
                setCurOperator(item);
                break;
            default:
                setResult(0);
                setDisplay(item);
                break;
        }
    }

    return (
        <>
            <input className="screen" value={display}></input>
            <div className="key-container">
                {initKeys.map(item => <button className="key" onClick={() => handleClick(item)}>{item}</button>)}
            </div>
        </>
    )
}
export default Calc;