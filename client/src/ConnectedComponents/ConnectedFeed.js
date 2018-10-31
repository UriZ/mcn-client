import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from "react-redux";
import {errorGettingFeed, gettingFeedData, logout, popUlateFeed} from "../Actions/actions";
import {Redirect} from "react-router-dom";
import ApplicationBar from "../appBar";
import Feed from "../Components/Feed";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiTheme from '../Themes'
import RaisedButton from 'material-ui/RaisedButton';
import ConnectedFilter from "./ConnectedFilter"
import '../Components/filterBar.css'



/**
 * load data for the feed and connect it with the store
 */
class ConnectedFeed extends React.Component {

    constructor(props){
        super(props);
    }


    /**
     * get feed data when component is loaded
     */
    componentDidMount(){

        // a very ugly hack - if we are not logged in we will route to a different page - so we dont need this code to run
        if (this.props.loggedIn)
            return this.getMatch();
    }


    /**
     * get feed data from backend, disaptch data to store
     */
    getMatch(){

        // create authorisation header
        let accessToken = window.FB.getAuthResponse().accessToken;
         let authHeader = "Bearer " + accessToken;

        // set the loading state in the store
        this.props.dispatchGettingFeedData();

        fetch('/match',{
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
        }).then((jsonArray)=>{
            // update feed data in store
            this.props.dispatchFeedData(jsonArray) ;
        }).catch((error)=>{
            if (error.message === "401"){

                // need to relogin - so set the state to logout
                this.props.dispatchLogout();
            }
            else /*if (error.message === "500")*/{
                // we either got 500 or 400 from the backend, or there is no internet etc
                this.props.dispatchErrorGettingFeed();
            }
        });
    }

    logout(){
        // keep that since FB logout is in the global scope
        let that = this;
        window.FB.logout((response)=>{
            // change the state after successful logout
            that.props.dispatchLogout();
        });
    };



    render() {
        if (this.props.loggedIn == false) {

            return <Redirect to="/login"/>
        }
        else {


            return (
                <div>

                <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
                    <ApplicationBar logout={this.logout.bind(this)}/>
                    <div className={"filterBar"}>
                        <ConnectedFilter />
                        <RaisedButton
                            label="go"
                            onClick={this.getMatch.bind(this)}
                            className={"goButton"}

                        />
                    </div>
                    <Feed feed={this.props.feed} isFeedLoading={this.props.isFeedLoading} />
                </MuiThemeProvider>
                </div>
            )
        }
    };
}




const mapStateToProps = (state)=>{
    return state;
}

const mapDispatchToProps = (dispatch)=>{
    return {
        dispatchLogout: () => {

            dispatch(logout("logging out"));
        },
        dispatchFeedData: (jsonArray)=>{
            dispatch(popUlateFeed(jsonArray));
        },
        dispatchGettingFeedData: ()=>{
            dispatch(gettingFeedData());
        },
        dispatchErrorGettingFeed: ()=>{
            dispatch(errorGettingFeed());
        },
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(ConnectedFeed);


