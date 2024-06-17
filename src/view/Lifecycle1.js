import { render } from "@testing-library/react";
import React, { Component } from "react";

class Lifecycle1 extends React.Component{  // Lifecycle Component
    constructor(props){                    // Constructor
        super(props);                      // initialize base class constructor as a best practice
        this.state = {                     // state 
            instrument:"Guiter"             // props 
        }
    }



// Static getDerivedStateFormProps(props){
//     // The attribute temp= "Drums" gets passed here by the system return {instrument:props.temp}
//     // system defined lifecycle hook
// }


// shouldComponentUpadate(){
//     return false
// }


getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('Before update: ' + prevState.instrument);
    return null;        // must return the snapshop object or null
}


componentDidUpdate(){
    console.log('Updated value : ' + this.state.instrument);
}

componentDidMount(){
    setTimeout(()=>{
        this.state({instrument:"Drums"})
    }, 3000);
}


render(){
    return (
        <div id="lifecycle">
            <h1>I know to play the {this.state.instrument}</h1>
        </div>
    );
}


}

export default Lifecycle1;