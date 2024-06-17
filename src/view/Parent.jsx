import React from "react";
import Child from "../Child";


class Parent extends React.Component{
    render(){
        return (
            <div className="Parent">
                <Child MyParentCompo = "Parent React Component "/>
            </div>
        )
    }
}

export default Parent;