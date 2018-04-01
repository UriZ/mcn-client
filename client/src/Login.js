import './Login.css';
import React, { Component } from 'react';
import App from "./App";
import { connect } from 'react-redux'
import FacebookLogin from 'react-facebook-login';
// import FBLogin from './FBLogin'

import {login} from './Actions/actions'
import {

    Redirect
} from "react-router-dom";
class LoginPage extends React.Component {

    constructor(props){

        super(props);
    };



    login(){
        // keep that since all the FB actions are in the global scope
        let that = this;
        window.FB.getLoginStatus(function(response) {

            if (response.status === 'connected') {
                alert(response.authResponse.accessToken);
                // user is connected to the app and to FB - no need to login to fb just change the state
                that.props.dispatchLogin();
            }
            else if (response.status === 'not_authorized' || response.status ==='unknown')
            {

                // user not connected to the app - need to login
                window.FB.login((response)=>{


                    if (response.status === 'connected'){
                        alert(response.authResponse.accessToken);

                        // successfull login - change state
                        that.props.dispatchLogin();
                    }
                    else{
                        // user did not login - nothing happened
                    }
                },{scope:'user_friends', return_scopes: true});
            }
        });
    }



    render() {

        if (this.props.loggedIn == true){

            return  <Redirect to="/feed"/>
        }
        else{

            return (


                <div className="login">
                    <h1>Login using fb</h1>

                    <div>
                        {/* bind this to have access to props later on */}
                        <button onClick={this.login.bind(this)}>Log in</button>
                    </div>
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
