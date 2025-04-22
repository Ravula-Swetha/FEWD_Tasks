import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    const Increment = () =>{
         setCount(count+1);
    }

    const Decrement = () => {
         setCount(count-1);
    }
    return(
        <>
        <div>
            <h1> This is Functional Component </h1>
            <p>These are stateless. They use useState to have states</p>
            <button onClick={Increment}>Increment</button>
            <p>{count}</p>
            <button onClick={Decrement}>Decrement</button>
        </div>
        <hr></hr>
        </>
    )
}

export default Counter;