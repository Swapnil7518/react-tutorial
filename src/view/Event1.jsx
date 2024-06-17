import React from "react";

class Event1 extends React.Component{

    click(){
        alert("Good One");
    }

    render(){
        return(
            <button onClick={this.click}>Click Here </button>
        );
    }
};

export default Event1;