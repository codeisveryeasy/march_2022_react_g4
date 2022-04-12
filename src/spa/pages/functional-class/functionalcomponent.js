import React from 'react';
import FunctionalChild from './functionalchild';


function FunctionalComponent(){

    var score = 99

    function welcome(){
        return "Functional components are modern " + score + "% !!!!"
    }


    return (
        <div>
            <p>I am functional component!</p>
            <div>
                Child: <FunctionalChild location="Air Asia Academy"></FunctionalChild>
            </div>
            <div>
                {welcome()}
            </div>
        </div>
    )

}

export default FunctionalComponent