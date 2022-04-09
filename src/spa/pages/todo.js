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
    
    render() { 
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.userid}</td>
                <td>{this.props.title}</td>
                <td>{this.getCompleted()}</td>
            </tr>
        );
    }
}
 
export default Todo;