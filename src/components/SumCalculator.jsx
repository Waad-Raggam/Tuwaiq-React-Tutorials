import React, { useState } from "react";

function SumCalculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");

    const handleChangeNum1 = (e) => {
        setNum1(e.target.value);
    };

    const handleChangeNum2 = (e) => {
        setNum2(e.target.value);
    };

    const calculateSum = () => {
        const sum = parseFloat(num1) + parseFloat(num2);
        console.log("Sum=", sum);
    };

    return (
        <div>
            <h2>Sum Calculator</h2>
            <input 
                type="text" 
                value={num1} 
                onChange={handleChangeNum1} 
                placeholder="First number" 
            />
            <input 
                type="text" 
                value={num2} 
                onChange={handleChangeNum2} 
                placeholder="Second number" 
            />
            <button onClick={calculateSum}>Calculate</button>
        </div>
    );
}

export default SumCalculator;
