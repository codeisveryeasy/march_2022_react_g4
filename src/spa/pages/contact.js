import React from 'react';


class Contact extends React.Component {
    state = {  
        name:"",
        email:""
    } 

    captureName=(event)=>{
        //console.log(event)
        this.setState({
            name: event.target.value
        })
        //console.log(this.state.name)
    }

    render() { 
        return (
            <div>
                <h1>Contact</h1>
                Name: 
                <input onChange={this.captureName} 
                        value={this.state.name}
                ></input> 
                {this.state.name}
                <br></br><br></br>
                Email: 
                <input></input> 
                <br></br><br></br>
                <button>Send</button>
                
            </div>
        );
    }
}
 
export default Contact;