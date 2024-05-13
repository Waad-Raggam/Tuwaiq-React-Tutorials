// dont forget imports when using state
import { useState } from "react";
const MyFirst = () => {
    // script
    const name = "Welcome to tuwaiq";
    const x = 10.5

    // alternative to writing events here on outside
    const ShowMessage=()=>{
        alert("you clicked button");
    }

    // states in react
    let nameState = "use state";
    const ChangeNameState=()=>{
        nameState="changed";

    }
    // below is wrong
    //  const [tripData, setTripState] = useState('the trip is next week');
    //  const ChangeTripData=()=>{
    //     tripData = "lol cancelled";
    // }
     // State
     const [tripData, setTripData] = useState('the trip is next week');

     // State update function
     const changeTripData = () => {
         setTripData("lol cancelled");
     };
 
    return(
        //html
        <> 
        {/* i dont know what line 8 is */}
        {/* calling variables in jsx */}
         <p>Welcome to my first component</p>
        <p>{name}</p>
        <p>{x}</p>
        {/* events in jsx */}
        {/* <button onClick={()=>alert("you clicked button")}>Click</button> */}

        {/* instead of writing function inside jsx like line 20, declare function ShowMessage and use it as follows */}

        <button onClick={ShowMessage}>Click</button>


        {/* state */}

        <p>{tripData}</p>
        <button onClick={changeTripData}>Click</button>
        </>

    );
}

export default MyFirst;