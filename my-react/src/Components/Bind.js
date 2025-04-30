import React from "react";

class Bind extends React.Component{
    constructor(props){
        super(props);
        this.state = {value : 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            value : prevState.value + 1
        }));
    }

    render(){
        return(
            <>
            <h2>Bind Function</h2>
            <button onClick={this.handleClick}>Click Me!!</button>
            <p>{this.state.value}</p>
            </>
        )
    }
}

export default Bind;