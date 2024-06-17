import { Component } from 'react';
import db1 from './db1.json';

class Header extends Component{
    constructor(){
        super()
        this.state = {
            title:'React App',
            userInput:'',
            db1:[],
            filteredDb1:[]
            
        };
    }

    componentDidMount(){
        
        this.setState({db1, filteredDb1:db1});
    }
  
    inputChange=(event)=>{
        const searchTerm = event.target.value;
        this.setState({userInput: searchTerm}, this.filtereDb1);
    }


    filtereDb1 =()=>{
        const {db1, userInput} = this.state;
        const filteredDb1 = db1.filter(user =>
            user.firstName.toLowerCase().includes(userInput.toLowerCase())
        );
        this.setState({filteredDb1});

    }


    render(){

        const { filteredDb1, userInput } = this.state;

        return(
            <div>
            <center>
                <h1>Users</h1>
                <center>
                    <input type="text" placeholder='User to search' value={userInput} onChange={this.inputChange} />
                </center>
                <p>{userInput}</p>
                <div>
                    {filteredDb1.map(user =>(
                        <div>
                            <p>{user.id}</p>
                            <h2>{user.firstName}</h2>
                            <p>{user.age}</p>
                           <img src={user.image} />
                            
                            
                            </div>
                    ))}
                </div>
            </center>
        </div>
        )
     
    }



}

export default Header;


