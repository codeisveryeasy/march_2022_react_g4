import React from 'react';
import { Routes, Route } from 'react-router-dom';
import APITodos from './pages/apitodos';
import Contact from './pages/contact';
import Container from './pages/functional-class/container';
import Home from './pages/home';
import Lifecycle from './pages/lifecycle';
import MessageList from './pages/message/messagelist';
import NewTodo from './pages/newtodo';


class Content extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/messagelist' element={<MessageList></MessageList>}></Route>
                    <Route path='/contact' element={<Contact></Contact>}></Route>
                    <Route path='/lifecycle' element={<Lifecycle></Lifecycle>}></Route>
                    <Route path='/api' element={<APITodos></APITodos>}></Route>
                    <Route path='/newtodo' element={<NewTodo></NewTodo>}></Route>
                    <Route path='/functional' element={<Container></Container>}></Route>
                </Routes>
            </div>
        );
    }
}
 
export default Content;