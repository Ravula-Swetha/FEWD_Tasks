// load the user data from api and check what are the different life cycle components that appeared on the screen when you see the output.

import React from "react";
import axios from "axios";

class LoadData extends React.Component{
    constructor(props){
        super(props);
        this.state = {data : ""};
        console.log("Stage 1: Initializing... In Constructor");
    }

    componentDidMount = () =>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            this.setState({ data : response.data});
            console.log("data received: " , response.data);
        });
        
        console.log("Stage 2: Mounting... In componentDidMount()");
    }

    componentDidUpdate(){
        console.log("Stage 3: Updating... In componentDidUpdate()");
    }

    componentWillUnmount(){
        console.log("Stage 4: UnMounting... In componentWillUnMount()");
    }
    // let {name, email}  = this.state.data[0];

    render(){
        console.log("Stage 3`: In render(), Updating....");
        return(
            <>
              <h2>Data Retrieved: </h2>  
              {this.state.data && this.state.data.map((field) =>(
                <div key={field.id}>
                    <p>Name: {field.name}</p>
                    <p>Email: {field.email}</p>
                    <hr />
                </div>
              ))}
            </>
        )
    }
}

export default LoadData;