import React from 'react';

class Lifecycle extends React.Component {
    state = { 
        likes: 8,
        name:"Air Asia Academy"
     } 

    constructor(props){
        super(props)
        console.log("1st. Constructor gets called")
    }

    componentWillMount(){
        console.log("2nd. Component will be mounted")
        alert("Click Ok to exit componentWillMount and render the JSX of component in DOM")
    }

    componentDidMount(){
        console.log("4th. Component mounted with success")
    }

    addLikes=()=>{
        console.log("addLikes -> likes will be updated: " + this.state.likes)
        this.setState({
            likes: this.state.likes + 1
        })
        console.log("addLikes -> likes is updated: " + this.state.likes)
    }

    componentWillUpdate(){
        console.log("5th. Component will be updated")
        alert("Click Ok to exit componentWillUpdate and render the updated JSX of component with updated state values in DOM")
    }

    componentDidUpdate(){
        console.log("6th. Component updated with success")
    }

    render() { 
        return (
            <div>
                <h1>Lifecycle of Component</h1>
                <br></br>
                <button onClick={this.addLikes}>Add {this.state.likes}</button>
            </div>
        );
    }
}
 
export default Lifecycle;