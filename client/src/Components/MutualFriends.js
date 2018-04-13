import React from "react";
import Avatar from 'material-ui/Avatar';

/**
 * show mutual fb friends
 */
class MutualFriends extends React.Component{

    constructor(props){
        super(props);
    }

    render (){

        if (this.props.mutualFriends){

            let mutualFriends = this.props.mutualFriends.map((elem, index)=>{

                // create avatars for the first three friends - and stack them on top of each other
                // TODO need to make this code less ugly
                if (index == 0){

                    return (
                        <Avatar style= {{height:'25px', width:'25px'}} src={this.props.mutualFriends[index].picture.data.url}/>
                    );
                }
                else if (index == 1){
                    return (
                        <Avatar style= {{height:'25px', width:'25px',position:'relative', left:'-10px' }} src={this.props.mutualFriends[index].picture.data.url}/>
                    );
                }
                else if (index == 2){
                    return (
                        <Avatar style= {{height:'25px', width:'25px',position:'relative', left:'-20px' }} src={this.props.mutualFriends[index].picture.data.url}/>
                    );
                }
                else {
                    return null;
                }

            });

            return (
                <div>
                    <div style ={{color:'#405661', padding:'8px',fontSize:'14px'}}>
                        {this.props.mutualFriends.length} {this.props.mutualFriends.length == 1 ? "mutual friend" : "mutual friends"}
                    </div>
                    {mutualFriends}
                </div>

            );
        }
        else {

            return (<div></div>);
        }
    }
}



export default MutualFriends;