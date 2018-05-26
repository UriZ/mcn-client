import {errorGettingFeed, gettingFeedData, logout, popUlateFeed} from "../Actions/actions";
import {connect} from "react-redux";
import {getUserPref} from "../Actions/actions";
import muiTheme from "../Themes";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MainFilterDrawer from "../Components/MainFilterDrawer";
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ConnectedFilter extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        return this.getUserPref();
    }

    /**
     * get the preferences of the user and update store
     */
    getUserPref(){

        // create authorisation header
        let accessToken = window.FB.getAuthResponse().accessToken;
        let authHeader = "Bearer " + accessToken;

        fetch('/users/preferences',{
            method: 'GET',
            headers: new Headers({
                "Content-Type": "application/json",
                "authorization": authHeader
            })
        }).then((response) =>{
            if (!response.ok){
                throw new Error(response.status)
            }
            return response.json();
        }).then((jsonObject)=>{
            // update feed data in store
            this.props.dispatchPrefData(jsonObject) ;
        }).catch((error)=>{
            if (error.message === "401"){

                // need to relogin - so set the state to logout
                this.props.dispatchLogout();
            }
            else /*if (error.message === "500")*/{
                // we either got 500 or 400 from the backend, or there is no internet etc
                // this.props.dispatchErrorGettingFeed();
                alert(error);
            }
        });
    }

    /**
     * update user pref in the redux store and on the backend
     * @param prefObject
     */
    updateUserPref(prefObject){

        // update pref data locally
        this.props.dispatchPrefData(prefObject);

        // create authorisation header
        let accessToken = window.FB.getAuthResponse().accessToken;
        let authHeader = "Bearer " + accessToken;

        fetch('/users/preferences',{
            method: 'PUT',
            body: JSON.stringify(prefObject),
            headers: new Headers({
                "Content-Type": "application/json",
                "authorization": authHeader
            })
        }).then((response) =>{
            if (!response.ok){
                throw new Error(response.status)
            }
            return
        }).catch((error)=>{
            if (error.message === "401"){

                // need to relogin - so set the state to logout
                this.props.dispatchLogout();
            }
            else /*if (error.message === "500")*/{
                // we either got 500 or 400 from the backend, or there is no internet etc
                // this.props.dispatchErrorGettingFeed();
                alert("temp error when updating pref");
            }
        });
    }

    render() {
            return (
                <div>
                    <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
                       < MainFilterDrawer userPref={this.props.userPref} updateUserPref={this.updateUserPref.bind(this)} />
                    </MuiThemeProvider>
                </div>
            )
    };

}


const mapStateToProps = (state)=>{
    return {userPref:state.userPref};
}

const mapDispatchToProps = (dispatch)=>{
    return {
        dispatchLogout: () => {

            dispatch(logout("logging out"));
        },

        dispatchPrefData: (prefObject)=>{
            dispatch(getUserPref(prefObject));
        },
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(ConnectedFilter);
