import React from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export const createBridgeForClassToUseHooks = (NewTodoInstance)=>{
    return props => <NewTodoInstance {...props} navigateNow={useNavigate()} />
}

class NewTodo extends React.Component {
    state = { 
        userId:0,
        title:"",
        completed:false
     } 

    captureUserId=(event)=>{
        console.log(event.target.value)
        this.setState({userId: event.target.value})
    }

    captureTitle=(event)=>{
        console.log(event.target.value)
        this.setState({title: event.target.value})
    }

    captureCompleted=(event)=>{
        console.log(event.target.value)
        this.setState({competed: event.target.value})
    }

    createAndPost=()=>{
        if (this.state.title.length >= 4 && this.state.userId > 0) {
            let newtodo ={
                userId: this.state.userId,
                title: this.state.title,
                completed: this.state.completed
            }
            console.log(newtodo)
            //use axios to post newtodo to api
            axios.post("http://localhost:3000/alltodos/", newtodo)
                .then(response=>{
                    console.log(response)
                    console.log(response.data)
                    //navigate back to /api
                    this.props.navigateNow("/api")
                }, error=>{
                    console.log(error)
                })
        }


       

    }

    render() { 
        return (
            <div>
                <h1>New Todo</h1>
                User Id: 
                <input type="number" onChange={this.captureUserId} value={this.state.userId}></input> (Add non-zero value)
                <br></br><br></br>
                Todo title:
                <input onChange={this.captureTitle} value={this.state.title}></input> (Minimum characters: 4)
                <br></br><br></br>
                Completed:
                <select onChange={this.captureCompleted} value={this.state.completed}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <br></br><br></br>
                <button onClick={this.createAndPost}>Add</button>
            </div>
        );
    }
}
 
export default createBridgeForClassToUseHooks(NewTodo);