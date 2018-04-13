import React from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Avatar from 'material-ui/Avatar';
import MutualFriends from './MutualFriends'


const CardExampleWithAvatar = (props ) => (
    <Card>
        <CardHeader
            title={props.title}
            subtitle={props.subtitle}
            avatar={props.image}
        />
        {/*<CardMedia*/}
        {/*overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}*/}
        {/*>*/}
        {/*<img src="./cover.png" alt="" />*/}
        {/*</CardMedia>*/}
        {/*<CardTitle title="Card title" subtitle="Card subtitle" />*/}
        <CardText>
            I would like to {props.preferences.operation} {props.preferences.amount} {props.preferences.currency}
            {/*Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.*/}
            {/*Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.*/}
        </CardText>
        <CardActions>

            <IconButton  aria-label="Delete" onClick={()=>{alert("ok2")}}>
                <DeleteIcon />
            </IconButton>
            {/*<div>*/}
                {/*{props.mutualFriends?*/}
                    {/*( <Avatar style= {{height:'25px', width:'25px'}}alt="Remy Sharp" src={props.mutualFriends[0].picture.data.url}/>)*/}
                    {/*: ""}*/}

            {/*</div>*/}
            <MutualFriends mutualFriends={props.mutualFriends}/>
            {/*<FlatButton label="Action1" onClick={()=>{alert("ok")}} />*/}
            {/*<FlatButton label="Action2"  onClick={()=>{alert ('click 2')}}/>*/}
        </CardActions>
    </Card>
);


/**
 * given an array of feed elements - render a feed
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

                return (
                    <div>
                        <CardExampleWithAvatar title = {elem.userName} subtitle = {elem.friendDegree == 2 ? "2nd" : ""} image = {elem.profilePic}
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