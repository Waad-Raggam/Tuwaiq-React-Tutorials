import React, { useState } from "react";

function SumCalculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [val, setVal] = useState(0);
    const [sum, setSum] = useState(0);

    const GetVal=(e, Setnum)=>{
        Setnum(e.target.value);
    }

    // const handleNumberChange = (e, set)

    // const handleChangeNum1 = (e) => {
    //     setNum1(e.target.value);
    // };

    // const handleChangeNum2 = (e) => {
    //     setNum2(e.target.value);
    // };

    // const calculateSum = () => {
    //     const sum = parseFloat(num1) + parseFloat(num2);
    //     console.log("Sum=", sum);
    // };

    const Summation =()=>{
        setSum(num1+num2);
    }

    return (
        <div>
            <h2>Sum Calculator</h2>
            <input 
                type="text" 
                value={num1} 
                onChange={(e)=>GetVal(e, setNum1)} 
                placeholder="First number" 
                id = "num1"
                name="num1"
            />
            <input 
                type="text" 
                value={num2} 
                onChange={(e)=>GetVal(e,setNum2)} 
                placeholder="Second number" 
                id="num2"
                name="num2"
            />
            <button onClick={Summation}>Calculate</button>
            <h1>{num1}+{num2}={sum}</h1>
        </div>
    );
}

export default SumCalculator;
