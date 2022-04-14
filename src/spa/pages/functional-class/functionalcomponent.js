import React, { useState } from 'react';
import FunctionalChild from './functionalchild';


function FunctionalComponent(){

    const [score, changeTheScore] =  useState(8)
    const [age, updateMyAge] =  useState(35)

    var amount = 99

    function welcome(){
        return "Functional components are modern " + amount + "% !!!!"
    }

    function updateScore(){
        changeTheScore((s)=>{
            console.log(s)
            return s + 1
        })
    }

    function changeAge(){
        updateMyAge(a=>a+4)

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
            <div>
                Score: {score} &nbsp;&nbsp;
                <button onClick={updateScore}>Change Score</button>
            </div>
            <div>
                Age: {age} &nbsp;&nbsp;
                <button onClick={changeAge}>Change Age</button>
            </div>
        </div>
    )

}

export default FunctionalComponent