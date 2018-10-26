import './Login.css';
import React, { Component } from 'react';
// import App from "./App";
import { connect } from 'react-redux'
import FacebookLogin from 'react-facebook-login';
// import FBLogin from './FBLogin'

import {login} from './Actions/actions'
import {

    Redirect
} from "react-router-dom";

class FBLogin extends React.Component{

    constructor(props){
        super(props);

    };


    componentDidMount() {
        window.fbAsyncInit = function() {
            window.FB.init({
                appId      : '1151370004993163',
                cookie     : true,  // enable cookies to allow the server to access
                // the session
                xfbml      : true,  // parse social plugins on this page
                version    : 'v2.1' // use version 2.1
            });


            // Now that we've initialized the JavaScript SDK, we call
            // FB.getLoginStatus().  This function gets the state of the
            // person visiting this page and can return one of three states to
            // the callback you provide.  They can be:
            //
            // 1. Logged into your app ('connected')
            // 2. Logged into Facebook, but not your app ('not_authorized')
            // 3. Not logged into Facebook and can't tell if they are logged into
            //    your app or not.
            //
            // These three cases are handled in the callback function.
            window.FB.getLoginStatus(function(response) {
                FBLogin.statusChangeCallback(response);
            }.bind(this));
        }.bind(this);

        // Load the SDK asynchronously
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
    static testAPI() {
        console.log('Welcome!  Fetching your information.... ');
        window.FB.api('/me', function(response) {
            console.log('Successful login for: ' + response.name);
            alert(
                'Thanks for logging in, ' + response.name + '!');
        });
    }

// This is called with the results from from FB.getLoginStatus().
    static statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            alert("going to call test api");
            FBLogin.testAPI();
        } else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.
            alert('Please log ' +
                'into this app.');
        } else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
           alert('Please log ' +
                'into Facebook.');
        }
    }

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
    static checkLoginState() {
        window.FB.getLoginStatus(function(response) {
             FBLogin.statusChangeCallback(response);
        }.bind(this));
    }

     static handleClick() {
        window.FB.login(FBLogin.checkLoginState());
         this.props.onLoginClick();
    }

    // render() {
    //     return (
    //         <div> my login page </div>
    //     // <fb:login-button scope="public_profile,email,user_friends" onlogin="checkLoginState();">
    //     // </fb:login-button>
    //
    //     );
    // }



    render() {
        alert("location" + this.props.location);

        if (this.props.loggedIn == true){

            return  <Redirect
                to="/feed"
            />
        }
        else{

            return (


                <div className="login">
                    <h1>Login using fb</h1>

                    <div>
                        <button onClick={
                            FBLogin.handleClick
                            // this.props.onLoginClick

                        }>Log in</button>
                    </div>



                </div>
            );
        }
    }
}

const responseFacebook = (response) => {
    alert(response);
}

const mapStateToProps = (state)=>{
    return state;
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onLoginClick: () => {
            alert("login1!!!!!");
            // FBLogin.handleClick();
            dispatch(login("Uri logged in"));
        }
    }
}


const ConnectedLoginPage = connect (mapStateToProps, mapDispatchToProps)(FBLogin);
export default ConnectedLoginPage;



