import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import RaisedButton from 'material-ui/RaisedButton';
import MutualFriends from './MutualFriends'

/**
 * a feed card - shows mutual friends, match preferencs etc
 */
class FeedCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        let id = this.props.id;
        // let messenger = "https://m.facebook.com/messages/compose?ids=" + id;
        let facebook = "https://www.facebook.com/"+id;


        return (
            <Card>
                <CardHeader
                    title={this.props.title}
                    subtitle={this.props.subtitle}
                    avatar={this.props.image}
                />
                <CardText>
                    I would like to {this.props.preferences.operation + " " + this.props.preferences.amount  + " " +  this.props.preferences.currency}
                </CardText>
                <CardActions>
                    <MutualFriends mutualFriends={this.props.mutualFriends}/>
                    <RaisedButton label="Connect on facebook" primary={true} href={facebook}/>
                </CardActions>
            </Card>
        )
    }
}



export default FeedCard;
