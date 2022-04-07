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

    captureEmail=(event)=>{
        this.setState({
            email: event.target.value
        })
    }

    resetCaptures=()=>{
        this.setState({
            name:"",
            email:""
        })
    }

    render() { 
        return (
            <div>
                <h1>Contact</h1>
                Name: 
                <input 
                        onChange={this.captureName} 
                        value={this.state.name}
                ></input> 
                {this.state.name}
                <br></br><br></br>
                Email: 
                <input
                        onChange={this.captureEmail}
                        value={this.state.email}
                ></input> 
                {this.state.email}
                <br></br><br></br>
                <button>Send</button>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                <button onClick={this.resetCaptures}>Reset</button>
            </div>
        );
    }
}
 
export default Contact;