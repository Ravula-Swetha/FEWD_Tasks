import React from 'react';

class LifeCycle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : 0
        };

        console.log("Phase 1: Component Initialized - props and states are set");
    }

    componentDidMount(){
        console.log("Phase 2: Component Mounted - add component to DOM");
    }

    componentDidUpdate(prevState){
        if(this.prevState !== this.state.value){
            console.log("Phase 3: Component Updated - props or states are updated");
        }
    }

    componentWillUnmount(){
        console.log("Phase 4: Component Unmount - Component is removed from the DOM");
    }

    IncrementCounter = () =>{
        this.setState({value : this.state.value + 1});
    }

    render(){
        console.log("Render Component");
        return(
            <>
              <p>Count: {this.state.value}</p>
              <button onClick={this.IncrementCounter}>Increment</button>
            </>
        )
    }

}

export default LifeCycle;