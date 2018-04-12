import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */



const RightMenu = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Refresh"  />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" onClick={props.logout}/>
    </IconMenu>
);


class ApplicationBar extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
        <AppBar
            title="Title"
            iconElementRight={/*this.state.logged ? <Logged /> :*/ <RightMenu logout = {this.props.logout}/>}

        />)
    }

};


export default ApplicationBar;