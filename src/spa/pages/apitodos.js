import React from 'react';
import axios from "axios";


class APITodos extends React.Component {
    state = {  } 

    componentWillMount(){
        console.log("Will make a call to api using axios")
        this.getTodosAll()
    }

    getTodosAll=()=>{
        //use axios to get alltodos from api
        axios.get("http://localhost:3000/alltodos/")
            .then((response)=>{
                console.log(response)
                console.log(response.data)
            }, (error)=>{
                console.log(error)
            
            })
    }

    render() { 
        return (
            <div>
                 <h1>Get list of todos from API</h1>
                 <p>http://localhost:3000/alltodos/</p>
            </div>
           
        );
    }
}
 
export default APITodos;