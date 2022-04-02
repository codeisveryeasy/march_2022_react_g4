import React from 'react';


class ActionButtons extends React.Component {
    state = { 
        score: 99,
        likes: parseInt(this.props.lks)
     } 


     addLikes=()=>{
       this.setState({likes: this.state.likes + 1})
     }


    render() { 
        return (
            <div>
                <button onClick={this.addLikes}>Likes {this.state.likes}</button>
                &nbsp;
                <button>DisLikes {this.props.dlks}</button>
                &nbsp;
                Score: {this.state.score}
            </div>
        );
    }
}
 
export default ActionButtons;