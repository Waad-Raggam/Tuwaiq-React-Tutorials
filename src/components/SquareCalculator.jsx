import React, { useState } from "react";

function SquareCalculator() {
    const [number, setNumber] = useState("");
    const [square, setSquare] = useState(null);

    const handleChange = (e) => {
        setNumber(e.target.value);
    };

    const calculateSquare = () => {
        const num = parseFloat(number);
        if (!isNaN(num)) {
            setSquare(num * num);
        } else {
            // Handle invalid input
            alert("Please enter a valid number.");
        }
    };

    return (
        <div>
            <h2>Square Calculator</h2>
            <input 
                type="text" 
                value={number} 
                onChange={handleChange} 
                placeholder="Enter a number" 
            />
            <button onClick={calculateSquare}>Calculate</button>
            {square !== null && <p>The square of {number} is {square}</p>}
        </div>
    );
}

export default SquareCalculator;
