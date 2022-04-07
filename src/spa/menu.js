import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Link to="/">Home</Link> &nbsp; 
                <Link to="/messagelist">Message List</Link> &nbsp;
                <Link to="/contact">Contact</Link> &nbsp;
               
            </div>
        );
    }
}
 
export default Menu;