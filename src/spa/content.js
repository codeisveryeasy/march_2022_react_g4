import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/contact';
import Home from './pages/home';
import Lifecycle from './pages/lifecycle';
import MessageList from './pages/message/messagelist';


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
                </Routes>
            </div>
        );
    }
}
 
export default Content;