import React from 'react';
import axios from "axios";
import Todo from './todo';
import { useNavigate } from 'react-router-dom';

export const createBridgeForClassToUseHooks = (ApiToDoInstance)=>{
    return props => <ApiToDoInstance {...props} navigateNow={useNavigate()} />
}

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

    deleteById=(id)=>{
        console.log("Delete by id (ApiTodos): "+ id)
        //use axios to delete by id
        axios.delete("http://localhost:3000/alltodos/" + id)
            .then(response=>{
                console.log("Delete is success for id: " + id)
                console.log(response)
                console.log(response.data)
                //get the updated todos state
                this.getTodosAll()
            }, error=>{
                console.log(error)
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
                    deleteId={this.deleteById}
               >
               </Todo>
            )
        })
    }

    openNewTodoPage=()=>{
        console.log(this.props)
        this.props.navigateNow("/newtodo")
    }

    render() {
        return (
            <div>
                <h1>Get list of todos from API</h1>
                <p>http://localhost:3000/alltodos/</p>
                <button onClick={this.openNewTodoPage}>Add New Todo</button>
                <br></br><br></br>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>UserId</th>
                            <th>Todo Title</th>
                            <th>Completed</th>
                            <th colSpan={2}>Action</th>
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

export default createBridgeForClassToUseHooks(APITodos);