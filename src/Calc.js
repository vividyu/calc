import React, { useState } from "react";
function Calc() {
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

    return (
        <>
            <input className="screen"></input>
            <div className="key-container">
                {initKeys.map(item => <button>{item}</button>)}
            </div>
        </>
    )

}
export default Calc;