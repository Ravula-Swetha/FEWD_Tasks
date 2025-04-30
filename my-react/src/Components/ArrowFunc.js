import React from "react";

class ArrowFunc extends React.Component{
    constructor(props){
        super(props);
        this.state = {value : 0};
    }

    handleClick = () =>{
        this.setState(prevState =>({
            value : prevState.value + 1
        }));
    }
    render() {
        return(
            <>
            <h2>Arrow Function</h2>
            <button onClick={this.handleClick}>Click Me!</button>
            <p>{this.state.value}</p>
            </>
        )
    }
}

export default ArrowFunc;