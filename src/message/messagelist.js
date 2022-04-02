import React from 'react';
import Message from './message';


class MessageList extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
                Multiple instances of message component:
                <Message></Message>
                <Message></Message>
                <Message></Message>
                <Message></Message>
                

            </div>
        );
    }
}
 
export default MessageList;