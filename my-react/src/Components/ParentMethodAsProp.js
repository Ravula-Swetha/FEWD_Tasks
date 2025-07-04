import React  from "react";
import ChildMethodAsProp from './ChildMethodAsProp';

class ParentMethodAsProp extends React.Component{
    handleChildClick = () =>{
        console.log("Child Clicked..");
    }

    render(){
        return(
            <ChildMethodAsProp onClick={this.handleChildClick} />
        )
    }
}

export default ParentMethodAsProp;