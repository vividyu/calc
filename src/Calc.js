import React, { useState } from "react";
function Calc() {
    const [display, setDisplay] = useState(0);
    const [preVal, setPreVal] = useState(0);
    const [curVal, setCurVal] = useState(0);
    const [curOperator, setCurOperator] = useState("");
    const [waitOperator, setWaitOperator] = useState(false);

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

    function handleClear() {
        setDisplay(0);
        setCurVal(0);
        setPreVal(0);
        setCurOperator("");
        setWaitOperator(false);
    }

    function handleCalc() {
        const operator = curOperator;
        const prev = preVal;
        const cur = curVal;
        switch (operator) {
            case "+":
                return prev + cur;
            case "-":
                return prev - cur;
            case "x":
                return prev * cur;
            case "/":
                if (cur === 0) {
                    alert("divisor can't be zero!");
                    handleClear();
                    return NaN;
                } else {
                    return prev / cur;
                }

            default:
                alert(`Invalid operator: ${operator}`);
                return NaN;
        }
    }

    function handleClick(item) {
        if (item === "AC") {
            handleClear();
        } else if (item === "+" || item === "-" || item === "x" || item === "/") {
            if (waitOperator) {
                setCurOperator(item);
            } else {
                setCurOperator(item);
                const res = handleCalc();
                setPreVal(res);
                setDisplay(res);

                setCurOperator(item);
                setInProcess(true);
            }
        } else if (item === "=") {
            const res = handleCalc();
            setPreVal(res);
            setDisplay(res);
        }
        else if (!isNaN(item)) {
            setCurVal(item);
            setDisplay(item);
            setWaitOperator(true);
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