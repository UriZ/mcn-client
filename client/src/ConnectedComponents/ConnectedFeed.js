import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from "react-redux";
import {errorGettingFeed, gettingFeedData, logout, popUlateFeed} from "../Actions/actions";
import {Redirect} from "react-router-dom";
import ApplicationBar from "../appBar";
import Feed from "../Components/Feed";
import {cyan500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import muiTheme from '../Themes'
import TabsNavigation from '../Components/TabsNavigation'
import MainFilterDrawer from "../Components/MainFilterDrawer";
import RaisedButton from 'material-ui/RaisedButton';
import ConnectedFilter from "./ConnectedFilter"
import '../Components/filterBar.css'
// const muiTheme = getMuiTheme({
//     palette: {
//         textColor: cyan500,
//     },
//     appBar: {
//         height: 50,
//     },
// });
// const iconButtonElement = (
//     <IconButton
//         touch={true}
//         tooltip="more"
//         tooltipPosition="bottom-left"
//     >
//         <MoreVertIcon color={grey400} />
//     </IconButton>
// );
//
// const rightIconMenu = (
//     <IconMenu iconButtonElement={iconButtonElement}>
//         <MenuItem>Reply</MenuItem>
//         <MenuItem>Forward</MenuItem>
//         <MenuItem>Delete</MenuItem>
//     </IconMenu>
// );
//
//
//
// const CardExampleWithAvatar = (props ) => (
//     <Card>
//         <CardHeader
//             title={props.title}
//             subtitle={props.subtitle}
//             avatar={props.image}
//         />
//         {/*<CardMedia*/}
//             {/*overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}*/}
//         {/*>*/}
//             {/*<img src="./cover.png" alt="" />*/}
//         {/*</CardMedia>*/}
//         {/*<CardTitle title="Card title" subtitle="Card subtitle" />*/}
//         <CardText>
//             I would like to {props.preferences.operation} {props.preferences.amount} {props.preferences.currency}
//             {/*Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.*/}
//             {/*Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.*/}
//         </CardText>
//         <CardActions>
//             <IconButton  aria-label="Delete" onClick={()=>{alert("ok")}}>
//                 <DeleteIcon />
//             </IconButton>
//             <IconButton  aria-label="Delete" onClick={()=>{alert("ok2")}}>
//                 <DeleteIcon />
//             </IconButton>
//             {/*<FlatButton label="Action1" onClick={()=>{alert("ok")}} />*/}
//             {/*<FlatButton label="Action2"  onClick={()=>{alert ('click 2')}}/>*/}
//         </CardActions>
//     </Card>
// );
//
//
// const FeedData = () => (
//     <div>
//         <dic>
//             <List>
//                 <Subheader>Today</Subheader>
//
//                 <CardExampleWithAvatar title = "Uri" subtitle = "zonens" image = "download.jpeg"/>
//                 <Divider inset = {true}/>
//
//                 <CardExampleWithAvatar title = "Gur" subtitle = "Harel" image = "bodyArm.jpg"/>
//                 <Divider inset = {true}/>
//
//                 <CardExampleWithAvatar title = "Gur" subtitle = "Harel" image = "bodyArm.jpg"/>
//                 <Divider inset = {true}/>
//
//
//                 <ListItem
//                     leftAvatar={<Avatar src="download.jpeg" />}
//                     primaryText="I'd like to buy some coins"
//                     secondaryText={
//                         <p>
//                             <span style={{color: darkBlack}}>Brendan Lim</span> --
//                             I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
//                         </p>
//
//                     }
//
//                     secondaryTextLines={2}
//                 />
//                 <Divider inset={true} />
//                 <ListItem
//                     leftAvatar={<Avatar src="download.jpeg" />}
//                     primaryText="I'd like to buy some coins too!"
//                     secondaryText={
//                         <p>
//                             <span style={{color: darkBlack}}>Brendan Lim</span> --
//                             I&apos;looking to buy coins in t.a
//                         </p>
//
//                     }
//
//                     secondaryTextLines={2}
//                 />
//                 <Divider inset={true} />
//
//                 <ListItem
//                     leftAvatar={<Avatar src="download.jpeg" />}
//                     primaryText={
//                         <p>Summer BBQ&nbsp;&nbsp;<span style={{color: lightBlack}}>4</span></p>
//                     }
//                     secondaryText={
//                         <p>
//                             <span style={{color: darkBlack}}>to me, Scott, Jennifer</span> --
//                             Wish I could come, but I&apos;m out of town this weekend.
//                         </p>
//                     }
//                     secondaryTextLines={2}
//                 />
//                 <Divider inset={true} />
//                 <ListItem
//                     leftAvatar={<Avatar src="bodyArm.jpg" />}
//                     primaryText="Oui oui"
//                     secondaryText={
//                         <p>
//                             <span style={{color: darkBlack}}>Grace Ng</span> --
//                             Do you have Paris recommendations? Have you ever been?
//                         </p>
//                     }
//                     secondaryTextLines={2}
//                 />
//                 <Divider inset={true} />
//                 <ListItem
//                     leftAvatar={<Avatar src="download.jpg" />}
//                     primaryText="Birdthday gift"
//                     secondaryText={
//                         <p>
//                             <span style={{color: darkBlack}}>Kerem Suer</span> --
//                             Do you have any ideas what we can get Heidi for her birthday? How about a pony?
//                         </p>
//                     }
//                     secondaryTextLines={2}
//                 />
//                 <Divider inset={true} />
//                 <ListItem
//                     leftAvatar={<Avatar src="download.jpg" />}
//                     primaryText="Recipe to try"
//                     secondaryText={
//                         <p>
//                             <span style={{color: darkBlack}}>Raquel Parrado</span> --
//                             We should eat this: grated squash. Corn and tomatillo tacos.
//                         </p>
//                     }
//                     secondaryTextLines={2}
//                 />
//             </List>
//         </dic>
//         <div>
//             <List>
//                 <Subheader>Today</Subheader>
//                 <ListItem
//                     leftAvatar={<Avatar src="images/ok-128.jpg" />}
//                     rightIconButton={
//                         <IconButton  aria-label="Delete">
//                             <DeleteIcon />
//                         </IconButton>
//                     }
//                     primaryText="Brendan Lim"
//                     secondaryText={
//                         <p>
//                             <span style={{color: darkBlack}}>Brunch this weekend?</span><br />
//                             I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
//                         </p>
//                     }
//                     secondaryTextLines={2}
//                 />
//                 <IconButton  aria-label="Delete">
//                     <DeleteIcon />
//                 </IconButton>
//                 <Divider inset={true} />
//                 <ListItem
//                     leftAvatar={<Avatar src="images/kolage-128.jpg" />}
//                     rightIconButton={rightIconMenu}
//                     primaryText="me, Scott, Jennifer"
//                     secondaryText={
//                         <p>
//                             <span style={{color: darkBlack}}>Summer BBQ</span><br />
//                             Wish I could come, but I&apos;m out of town this weekend.
//                         </p>
//                     }
//                     secondaryTextLines={2}
//                 />
//                 <Divider inset={true} />
//                 <ListItem
//                     leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
//                     rightIconButton={rightIconMenu}
//                     primaryText="Grace Ng"
//                     secondaryText={
//                         <p>
//                             <span style={{color: darkBlack}}>Oui oui</span><br />
//                             Do you have any Paris recs? Have you ever been?
//                         </p>
//                     }
//                     secondaryTextLines={2}
//                 />
//                 <Divider inset={true} />
//                 <ListItem
//                     leftAvatar={<Avatar src="images/kerem-128.jpg" />}
//                     rightIconButton={rightIconMenu}
//                     primaryText="Kerem Suer"
//                     secondaryText={
//                         <p>
//                             <span style={{color: darkBlack}}>Birthday gift</span><br />
//                             Do you have any ideas what we can get Heidi for her birthday? How about a pony?
//                         </p>
//                     }
//                     secondaryTextLines={2}
//                 />
//                 <Divider inset={true} />
//                 <ListItem
//                     leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
//                     rightIconButton={rightIconMenu}
//                     primaryText="Raquel Parrado"
//                     secondaryText={
//                         <p>
//                             <span style={{color: darkBlack}}>Recipe to try</span><br />
//                             We should eat this: grated squash. Corn and tomatillo tacos.
//                         </p>
//                     }
//                     secondaryTextLines={2}
//                 />
//             </List>
//         </div>
//     </div>
// );
//
//
//


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
            // change the state after successfull logout
            that.props.dispatchLogout();
        });
    };



    // renderFeed(){
    //
    //     if (this.props.isFeedLoading){
    //         return (
    //             // todo create spinner
    //             <div>loading...</div>
    //         )
    //     }
    //     else if (this.props.feed == null){
    //         return (
    //             // todo create error component
    //             <div>something went wrong...</div>
    //         )
    //     }
    //     else if (this.props.feed.length == 0){
    //
    //         return (
    //             <div>
    //                 you don't have any matches right now...
    //             </div>
    //         );
    //     }
    //     else{
    //         let feed =  this.props.feed.map((elem, index)=>{
    //
    //             return (
    //                 <div>
    //                     <CardExampleWithAvatar title = {elem.userName} subtitle = "" image = {elem.profilePic}
    //                     preferences = {elem.preferences} />
    //                     <Divider inset = {false}/>
    //
    //                 </div>
    //         )
    //
    //         });
    //         return feed;
    //     }
    //
    //
    // }



    render() {
        if (this.props.loggedIn == false) {

            return <Redirect to="/login"/>
        }
        else {

            return (
                <div>
                    <a href="https://m.me/100024549967409">
                        Message us on Facebook
                    </a>


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
                    {/*<TabsNavigation/>*/}
                    {/*{this.renderFeed()}*/}
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


