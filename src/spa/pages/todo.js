import React from 'react';

class Todo extends React.Component {
    state = {  } 
    render() { 
        return (
            <li>{this.props.title}</li>
        );
    }
}
 
export default Todo;