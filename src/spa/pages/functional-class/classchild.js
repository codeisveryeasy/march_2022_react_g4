import React from 'react';

class ClassChild extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
                <p>I am located in: {this.props.location}</p>
            </div>
        );
    }
}
 
export default ClassChild;