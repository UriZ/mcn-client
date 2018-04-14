import React, { Component } from 'react';
import './App.css';
import ConnectedLoginPage from "./Login";
import ConnectedFeed from "./ConnectedComponents/ConnectedFeed";

import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

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
                {/*first page is the login page*/}
                <Route exact path = "/" component = {ConnectedLoginPage}/>
                {/*render feed or login page depending on the login status*/}
                <Route path="/feed" component={ConnectedFeed} />
                <Route path="/login" component={ConnectedLoginPage} />
            </div>
        </Router>


);



export default App;
