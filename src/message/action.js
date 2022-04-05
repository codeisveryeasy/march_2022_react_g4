import React from 'react';


class ActionButtons extends React.Component {
    state = { 
        score: 99,
        likes: parseInt(this.props.lks),
        dislikes: parseInt(this.props.dlks)
     } 

     constructor(props){
         super(props)
         console.log(typeof this.props.lks)
         console.log(typeof this.props.dlks)
     }

     addLikes=()=>{
       this.setState({likes: this.state.likes + 1})
     }

     removeLikes=()=>{
         console.log("removeLikes() called...")
        this.setState({dislikes: this.state.dislikes + 1})
     }

    render() { 
        return (
            <div>
                <button onClick={this.addLikes}>Likes {this.state.likes}</button>
                &nbsp;
                <button onClick={this.removeLikes}>DisLikes {this.state.dislikes}</button>
                &nbsp;
                <span style={{color:"red", border:"1px solid red"}}>
                    Score: {this.state.score}
                </span>
                
            </div>
        );
    }
}
 
export default ActionButtons;