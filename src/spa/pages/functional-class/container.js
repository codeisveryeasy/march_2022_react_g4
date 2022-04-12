import React from 'react';
import ClassComponent from './classcomponent';
import FunctionalComponent from './functionalcomponent';


class Container extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h1>Class component:</h1>
                <ClassComponent></ClassComponent>
                <hr></hr>
                <h1>Functional component:</h1>
                <FunctionalComponent></FunctionalComponent>
            </div>
        );
    }
}
 
export default Container;