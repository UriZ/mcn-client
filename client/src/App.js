import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIcon from './appBar';
import Feed from "./Feed";
import ConnectedLoginPage from "./Login";
import ConnectedFeed from "./Feed";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

let f = ()=>{

    fetch('/api')
        .then((response) =>{

            return((response.text())).then((txt)=>alert(txt));
        });


}

const CardExampleWithAvatar = () => (
    <Card>
        <CardHeader
            title="URL Avatar"
            subtitle="Subtitle"
            avatar="images/jsa-128.jpg"
        />
        <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
            <img src="./cover.png" alt="" />
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
            <FlatButton label="Action1" onClick={f} />
            <FlatButton label="Action2"  onClick={()=>{alert ('click 2')}}/>
        </CardActions>
    </Card>
);


const App = () => (
    <Router>
        <div>

            <ul>
                <li>
                    <Link to="/feed">feed</Link>
                </li>
                <li>
                    <Link to="/login">login page</Link>
                </li>
            </ul>
            <Route path="/feed" component={ConnectedFeed} />
            <Route path="/login" component={ConnectedLoginPage} />
        </div>
    </Router>
);



export default App;
