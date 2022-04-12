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
                <Link to="/lifecycle">Lifecycle</Link> &nbsp;
                <Link to="/api">Todos</Link> &nbsp;
                <Link to="/functional">Functional</Link> &nbsp;
               
            </div>
        );
    }
}
 
export default Menu;