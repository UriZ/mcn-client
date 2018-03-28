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

        // this.state = {
        //     loggedIn: false
        // }
    };
    render(match, location, history) {


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
                            this.props.onLoginClick

                        }>Log in</button>
                    </div>

                    {/*<FacebookLogin*/}
                        {/*appId="1151370004993163"*/}
                        {/*autoLoad={true}*/}
                        {/*fields="name,email,picture"*/}
                        {/*onClick={()=>alert("ok")}*/}
                        {/*callback={responseFacebook} />*/}

                    {/*<fb:login-button scope="public_profile,email,user_friends" onlogin={checkLoginState()}>*/}
                    {/*</fb:login-button>*/}

                    {/*<FBLogin/>*/}

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
            dispatch(login("Uri logged in"));
        }
    }
}


const ConnectedLoginPage = connect (mapStateToProps, mapDispatchToProps)(LoginPage);
export default ConnectedLoginPage;
