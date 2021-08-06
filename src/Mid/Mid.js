import { Component } from "react";
import About from "../right-container/About";
import Contact from "../right-container/Contact";
import {Route} from 'react-router-dom';
import Home from "../right-container/Home";

class Mid extends Component{
    
    state = {
        username : "",
        password : ""

    }

    changeHandler=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){

     if(this.state.username === "admin"){
        var abc = "Welcome admin"
     }
     if(this.state.username !== "admin" && this.state.username) {
         var asd = "Welcome " + this.state.username
     }
    
        return(
            <div className = "mid">

                <div className = "left">
                  <form>

                <input type="text" name= "username" value = {this.state.username} 
                    onChange= {this.changeHandler}
                    />
                    <br/>
                <input type="text" name="password" value = {this.state.password} 
                    onChange = {this.changeHandler} 
                    />
                    <br/>

                <button onClick={this.login}> Login </button>
                
                <p> {abc} </p>
                <p> {asd} </p>

                  </form>
                </div>

                <div className = "right">
                        <Route path="/" exact component={Home}/>
                        <Route path="/about"  component={About}/>
                        <Route path="/contact" component={Contact}/>
                </div>

            </div>
        
    )}
}


export default Mid