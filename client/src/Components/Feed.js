import React from "react";
import Divider from 'material-ui/Divider';
import FeedCard from "./FeedCard";


/**
 * given an array of feed elements - render the feed
 */
class Feed extends React.Component{


    constructor(props){
        super(props);
    }

    render() {

        if (this.props.isFeedLoading){
            return (
                // todo create spinner
                <div>loading...</div>
            )
        }
        else if (this.props.feed == null){
            return (
                // todo create error component
                <div>something went wrong...</div>
            )
        }
        else if (this.props.feed.length == 0){

            return (
                <div>
                    you don't have any matches right now...
                </div>
            );
        }
        else{
            let feed =  this.props.feed.map((elem, index)=>{

                // calculate friend degree
                let friendDegree = "";
                if (elem.friendDegree == 1){
                    friendDegree = "1st";
                }
                else if (elem.friendDegree == 2){
                    friendDegree = "2nd";
                }

                return (

                    <div>
                        <FeedCard id = {elem._id} title = {elem.userName} subtitle = {friendDegree} image = {elem.profilePic}
                                               preferences = {elem.preferences} degree = {elem.friendDegree} mutualFriends={elem.commonFriends}/>
                        <Divider inset = {false}/>

                    </div>
                )
            });
            return feed;
        }
    }
}


export default Feed;