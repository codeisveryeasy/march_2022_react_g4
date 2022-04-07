import React from 'react';
import Content from '../spa/content';
import Menu from '../spa/menu';

class RootComponent extends React.Component {
    state = {}

    score = 88

    getMessage=()=>{
        return "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
    }


    render() {
        return (
            <div>
                <h1>Root Component is cool! {this.score}</h1>
                <p>Message: {this.getMessage()}</p>
                <div>
                  <Menu></Menu>
                </div>
                <div>
                    <Content></Content>
                </div>
            </div>
        );
    }
}

export default RootComponent;
