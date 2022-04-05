import React from 'react';
import ActionButtons from './action';


class Message extends React.Component {
    state = {  } 
    messageStyle={
        float:'left', 
        width:'70%'
    }
    actionStyle= {
        float:'left', 
        width:'25%', 
        margin:'5px'
    }
   
    
    render() { 
        return (
            <div >
                <div style={this.messageStyle}>
                      <p>{this.props.msg}</p>
                </div>
              
                <div style={this.actionStyle}>
                    <ActionButtons lks={this.props.likes} dlks={this.props.dislikes}></ActionButtons>
                </div>
                
            </div>
        );
    }
}
 
export default Message;