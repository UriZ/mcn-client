import './Login.css';
import React, { Component } from 'react';
import App from "./App";
import { connect } from 'react-redux'
import FacebookLogin from 'react-facebook-login';
// import FBLogin from './FBLogin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ApplicationBar from "./appBar";
import RaisedButton from 'material-ui/RaisedButton';

import {login} from './Actions/actions'
import {

    Redirect
} from "react-router-dom";
class LoginPage extends React.Component {

    constructor(props){

        super(props);
    };


    signUp(){

        // keep that since all the FB actions are in the global scope
        let that = this;

        // user not connected to the app - need to login
        window.FB.login((response)=>{

            if (response.status === 'connected'){
                alert(response.authResponse.accessToken);

                // try and create a user in the db. If it already exists - simply continue with login. else create it and login


                // create authorisation header
                let accessToken = window.FB.getAuthResponse().accessToken;
                let authHeader = "Bearer " + accessToken;

                // set the loading state in the store
                // this.props.dispatchGettingFeedData();

                fetch('/users',{
                    method: 'POST',
                    headers: new Headers({
                        "Content-Type": "application/json",
                        "authorization": authHeader
                    })
                }).then((response) =>{
                    if (!response.ok){
                        response.json().then((res)=>{
                            if (res.errorCode && res.errorCode == "USER_EXISTS"){
                                // user is already in the db - simply login
                                that.props.dispatchLogin();
                            }
                            else{
                                // something else happened
                                alert("some other error");
                            }
                        });
                     }
                     else{
                        // user created ok - continue with login
                        that.props.dispatchLogin();
                    }
                }).catch((error)=>{
                    // this is some network error - show error
                    alert("network error");
                });
            }
            else{
                // user did not login to fb - nothing happened
            }
        },{scope:'user_friends', return_scopes: true});
    }


    login(){
        // keep that since all the FB actions are in the global scope
        let that = this;
        window.FB.login((response)=>{


            if (response.status === 'connected'){


                // create authorisation header
                let accessToken = window.FB.getAuthResponse().accessToken;
                let authHeader = "Bearer " + accessToken;

                fetch('/users',{
                    method: 'GET',
                    headers: new Headers({
                        "Content-Type": "application/json",
                        "authorization": authHeader
                    })
                }).then((response) =>{
                    if (!response.ok){
                        response.json().then((res)=>{

                            if (res.errorCode && res.errorCode == "NO_USER"){
                                alert("signup");
                            }
                        });
                    }
                    else{
                        // continue with login
                        that.props.dispatchLogin();
                    }
                }).catch((error)=>{
                    // this is some network error - show error
                    alert("failed to login");
                });
            }
            else{
                // user did not login - nothing happened
            }
        },{scope:'user_friends', return_scopes: true});
    }









    render() {

        if (this.props.loggedIn == true){

            return  <Redirect to="/feed"/>
        }
        else{

            return (

                <div className="loginScreen">
                    {/*<MuiThemeProvider>*/}

                    {/*<ApplicationBar/>*/}
                    {/*</MuiThemeProvider>*/}
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <p className="header">
                        Trade with people you trust
                    </p>
                    <p className="subHeader">
                        No hassle
                    </p>
                    <p className="subHeader">
                        No wait
                    </p>
                    <p className="subHeader">
                        No commission
                    </p>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <MuiThemeProvider>
                    <RaisedButton label="Signup with facebook" onClick={this.signUp.bind(this)}/>
                    </MuiThemeProvider>
                    <br></br>
                    <div className="loginSection">
                       already a member? <a onClick={this.login.bind(this)}> login </a>
                    </div>

                    {/*<div className="login">*/}
                        {/*<h1>Login using fb</h1>*/}

                        {/*<div>*/}
                            {/*/!* bind this to have access to props later on *!/*/}
                            {/*<button onClick={this.login.bind(this)}>Log in</button>*/}
                        {/*</div>*/}
                    {/*</div>*/}


                    {/*<div className= "signup">*/}
                        {/*<button onClick={this.signUp.bind(this)}>sign up</button>*/}


                    {/*</div>*/}


                </div>




            );
        }
    }
}




const mapStateToProps = (state)=>{
    return state;
}

const mapDispatchToProps = (dispatch)=>{
    return {
        dispatchLogin: () => {
            dispatch(login("Uri logged in"));
        }
    }
}


const ConnectedLoginPage = connect (mapStateToProps, mapDispatchToProps)(LoginPage);
export default ConnectedLoginPage;
