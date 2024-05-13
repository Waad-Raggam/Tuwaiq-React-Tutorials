const MyFirst = () => {
    // script
    const name = "Welcome to tuwaiq";
    const x = 10.5

    return(
        //html
        <> 
        {/* i dont know what line 8 is */}
        {/* calling variables in jsx */}
         <p>Welcome to my first component</p>
        <p>{name}</p>
        <p>{x}</p>

        {/* events in jsx */}
        <button onClick={()=>alert("you clicked button")}>Click</button>
        </>

    );
}

export default MyFirst;