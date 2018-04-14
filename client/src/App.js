import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIcon from './appBar';
import Feed from "./ConnectedComponents/ConnectedFeed";
import ConnectedLoginPage from "./Login";
import ConnectedFeed from "./ConnectedComponents/ConnectedFeed";
import MenuItem from 'material-ui/MenuItem';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import SelectFieldExampleFloatingLabel from "./FeedFilter";

let f = ()=>{

    fetch('/api')
        .then((response) =>{

            return((response.text())).then((txt)=>alert(txt));
        });


}


const App = () =>



    (
        <Router>
            <div>
                <Redirect to="/login"/>

                <Route path="/feed" component={ConnectedFeed} />
            <Route path="/login" component={ConnectedLoginPage} />
            </div>
        </Router>


);



export default App;
