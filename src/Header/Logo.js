
import React, { Component } from 'react'

class Logo extends Component{

    
    state = {
        num1 : "",
        num2 : "",
        total: ""

    }

    calculate=()=>{
        this.setState({
            total : this.state.num1*1 +  this.state.num2*1
        })
    }
    
    changeHandler=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){

        
        if(this.state.total){
            var abc = "the total is " + this.state.total
            }
        

        return (
            <div className = "logo">

                <input type="text" name= "num1" value = {this.state.num1} 
                    onChange= {this.changeHandler}
                    />
                <input type="text" name="num2" value = {this.state.num2} 
                    onChange = {this.changeHandler} 
                    />

                <button onClick={this.calculate}> Add </button>
                
                <p> {abc} </p>

            </div>

        )
    }

}

export default Logo