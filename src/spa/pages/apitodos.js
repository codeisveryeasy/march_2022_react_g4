import React from 'react';
import axios from "axios";
import Todo from './todo';


class APITodos extends React.Component {
    state = {
        users:["omi","lie", "chi", "mia","oki", "kia", "jio"],
        todos:[]
    }

    componentWillMount() {
        console.log("Will make a call to api using axios")
        this.getTodosAll()
    }

    getTodosAll = () => {
        //use axios to get alltodos from api
        axios.get("http://localhost:3000/alltodos/")
            .then((response) => {
                console.log(response)
                console.log(response.data)
                console.log(this.state.todos)
                this.setState({
                    todos: response.data
                })
                console.log(this.state.todos)

            }, (error) => {
                console.log(error)
            })
    }

    renderFewMoreLi = () => {
        return this.state.todos.map((u)=>{
            console.log(u)
            return(
               <Todo 
                    title={u.title}
               >
               </Todo>
            )
        })
    }

    renderFewMoreTr=()=>{
        return this.state.todos.map((u)=>{
            console.log(u)
            return(
               <Todo 
                    id={u.id}
                    title={u.title}
                    completed = {u.completed}
                    userid={u.userId}
               >
               </Todo>
            )
        })
    }

    render() {
        return (
            <div>
                <h1>Get list of todos from API</h1>
                <p>http://localhost:3000/alltodos/</p>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>UserId</th>
                            <th>Todo Title</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                         {this.renderFewMoreTr()}
                    </tbody>

                </table>
                
                {/*                 
                <ol>
                    {this.renderFewMoreLi()}
                </ol> */}

            </div>

        );
    }
}

export default APITodos;