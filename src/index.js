import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import RootComponent from './root/rootcomponent';

var location = document.getElementById("root")
//(rootcomponent to be rendered, location to render)
ReactDOM.render(
    <HashRouter>
        <div>
            <RootComponent></RootComponent>
       </div>
    </HashRouter>

    ,
    location)