import React from 'react';
import ActionButtons from './action';


class Message extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
                <p>{this.props.msg}</p>
                <ActionButtons lks={this.props.likes} dlks={this.props.dislikes}></ActionButtons>
            </div>
        );
    }
}
 
export default Message;