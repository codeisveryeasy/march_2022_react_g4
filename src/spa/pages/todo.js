import React from 'react';

class Todo extends React.Component {
    state = {  } 

    getCompleted=()=>{
       if(this.props.completed) {
           return (
               <span>Yes</span>
           )
       }else{
           return (
               <span>No</span>
           )
       }
    }

    deleteUser=()=>{
        console.log("Delete user with id: " + this.props.id)
        this.props.deleteId(this.props.id)
    }
    
    render() { 
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.userid}</td>
                <td>{this.props.title}</td>
                <td>{this.getCompleted()}</td>
                <td>
                    <button onClick={this.deleteUser}>Delete</button>
                </td>
                <td>
                    <button>Update</button>
                </td>
            </tr>
        );
    }
}
 
export default Todo;