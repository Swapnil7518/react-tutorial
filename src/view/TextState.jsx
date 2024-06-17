import React from "react";

class TextState extends React.Component{
    constructor(){
        super();
        this.state = {
            text: "Welcome Participants",
            Course : "MEAN/MEARN"
        } 
    }


changeText(){
    this.setState({
        text: "This is a React session",
         Course:"React"
    });

}

render(){
    return(
        <div>
            <h1>{this.state.text}</h1>
            <h2>{this.state.Course}</h2>
            <button onClick={()=> this.changeText()}>Next</button>
        </div>
    );
}

};
export default TextState;

