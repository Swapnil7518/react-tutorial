import React from "react";

class Child extends React.Component{
    render(){
        return(
            <h2>
                We are Learning : {this.props.MyParentCompo}
            </h2>
        )
    }
}

export default Child;