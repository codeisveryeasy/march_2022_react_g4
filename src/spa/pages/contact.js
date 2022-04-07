import React from 'react';


class Contact extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h1>Contact</h1>
                Name: 
                <input></input> 
                <br></br><br></br>
                Email: 
                <input></input> 
                <br></br><br></br>
                <button>Send</button>
                
            </div>
        );
    }
}
 
export default Contact;