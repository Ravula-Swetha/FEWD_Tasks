import { useState, useEffect } from "react"; 

function ConditionalRendering(props){
    let [data, setdata] = useState("");
    
    useEffect(() => {
        setdata(props.data);
    }, [props.data]);

    let ele;
    if(data === "hello"){
        ele = <div>The data from parent(IF-ELSE) is: {data}</div>;
    }
    else{
        ele = <div>No data from parent(IF-ELSE)</div>;
    }
    return(
        <>
        <h1>Render Page</h1>
        <h2>{ele}</h2>
        </>
    )
}

export default ConditionalRendering;