import React, { useEffect, useState } from 'react';
import axios from 'axios'


function UseEffectDemo() {

    const [users, setUsers] = useState([])

    useEffect(()=>{
        console.log("I will be called only once!")
        //alert("Click OK")
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response)=>{
                console.log(response)
                console.log(response.data)
                console.log(users)
                setUsers((users)=>{return response.data})
                console.log(users)
            }, (error)=>{
                console.log(error)
            })
    }, [])

    function renderUsers(){
        return users.map((u)=>{
            return (
                <li>
                    {u.id}, 
                    <b>{u.name}</b> 
                    from 
                    {u.address.city}
                </li>
            )
        })
    }

    return ( 
        <div>
            <h1>Use Effect Demo -&gt; useEffect()</h1>
            <div>
                <ol>
                    {renderUsers()}
                </ol>
            </div>
        </div>
     );
}

export default UseEffectDemo
