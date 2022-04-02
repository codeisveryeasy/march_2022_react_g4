import React from 'react';
import ReactDOM from 'react-dom';
import RootComponent from './root/rootcomponent';

var location = document.getElementById("root")
//(rootcomponent to be rendered, location to render)
ReactDOM.render(
    <div>
        <RootComponent></RootComponent>
      
    </div>
        , 
        location )