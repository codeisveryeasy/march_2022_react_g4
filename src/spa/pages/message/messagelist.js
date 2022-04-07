import React from 'react';
import Message from './message';


class MessageList extends React.Component {
    state = {}

    container = {
        margin: '0 auto',
        width: '90%',
        maxWidth: '1200px',
        overflow: 'auto'
    }

    render() {


        return (
            <div style={this.container}>
                Multiple instances of message component:

                <Message msg="Every moment is fresh beginning" likes="8" dislikes="2"></Message>
                <Message msg="Aspire to insprire before we expire" likes="18" dislikes="4"></Message>
                <Message msg="Love for all, hatred for none" likes="24" dislikes="5"></Message>
                <Message msg="The change starts from you" likes="88" dislikes="10"></Message>


            </div>
        );
    }
}

export default MessageList;