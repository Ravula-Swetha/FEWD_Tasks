import React from "react";

const ChildMethodAsProp = ({onClick}) =>{
    return(
       <button onClick={onClick}>Click Me</button>
    )
}

export default ChildMethodAsProp;