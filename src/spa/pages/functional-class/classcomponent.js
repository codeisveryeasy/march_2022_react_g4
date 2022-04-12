import React from 'react';
import ClassChild from './classchild';

class ClassComponent extends React.Component {
    state = { 
        age: 35
     } 

    score = 88

    welcome = ()=>{
        return "Class components are easy " + this.score + "% !!!!"
    }

    render() { 
        return (
            <div>
                <p>I am class based component!</p>
                <div>
                    Child: <ClassChild location="Malaysia"></ClassChild>
                </div>
                <div>
                    {this.welcome()}
                    <br></br>
                    Age : {this.state.age}
                </div>
            </div>
        );
    }
}
 
export default ClassComponent;