import React from 'react';

function FunctionalChild(props) {
    return (
        <div>
            <p>I am located in: {props.location} </p>
        </div>
    );
}

export default FunctionalChild;