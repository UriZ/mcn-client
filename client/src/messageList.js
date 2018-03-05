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

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={grey400} />
    </IconButton>
);

const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Reply</MenuItem>
        <MenuItem>Forward</MenuItem>
        <MenuItem>Delete</MenuItem>
    </IconMenu>
);

const ListExampleMessages = () => (
    <div>
        <dic>
            <List>
                <Subheader>Today</Subheader>
                <ListItem
                    leftAvatar={<Avatar src="download.jpeg" />}
                    primaryText="I'd like to buy some coins"
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>Brendan Lim</span> --
                            I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                        </p>

                    }

                    secondaryTextLines={2}
                />
                <Divider inset={true} />
                <ListItem
                    leftAvatar={<Avatar src="download.jpeg" />}
                    primaryText="I'd like to buy some coins too!"
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>Brendan Lim</span> --
                            I&apos;looking to buy coins in t.a
                        </p>

                    }

                    secondaryTextLines={2}
                />
                <Divider inset={true} />

                <ListItem
                    leftAvatar={<Avatar src="download.jpeg" />}
                    primaryText={
                        <p>Summer BBQ&nbsp;&nbsp;<span style={{color: lightBlack}}>4</span></p>
                    }
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>to me, Scott, Jennifer</span> --
                            Wish I could come, but I&apos;m out of town this weekend.
                        </p>
                    }
                    secondaryTextLines={2}
                />
                <Divider inset={true} />
                <ListItem
                    leftAvatar={<Avatar src="bodyArm.jpg" />}
                    primaryText="Oui oui"
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>Grace Ng</span> --
                            Do you have Paris recommendations? Have you ever been?
                        </p>
                    }
                    secondaryTextLines={2}
                />
                <Divider inset={true} />
                <ListItem
                    leftAvatar={<Avatar src="download.jpg" />}
                    primaryText="Birdthday gift"
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>Kerem Suer</span> --
                            Do you have any ideas what we can get Heidi for her birthday? How about a pony?
                        </p>
                    }
                    secondaryTextLines={2}
                />
                <Divider inset={true} />
                <ListItem
                    leftAvatar={<Avatar src="download.jpg" />}
                    primaryText="Recipe to try"
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>Raquel Parrado</span> --
                            We should eat this: grated squash. Corn and tomatillo tacos.
                        </p>
                    }
                    secondaryTextLines={2}
                />
            </List>
        </dic>
        <div>
            <List>
                <Subheader>Today</Subheader>
                <ListItem
                    leftAvatar={<Avatar src="images/ok-128.jpg" />}
                    rightIconButton={
                        <IconButton  aria-label="Delete">
                            <DeleteIcon />
                        </IconButton>
                    }
                    primaryText="Brendan Lim"
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>Brunch this weekend?</span><br />
                            I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                        </p>
                    }
                    secondaryTextLines={2}
                />
                <IconButton  aria-label="Delete">
                    <DeleteIcon />
                </IconButton>
                <Divider inset={true} />
                <ListItem
                    leftAvatar={<Avatar src="images/kolage-128.jpg" />}
                    rightIconButton={rightIconMenu}
                    primaryText="me, Scott, Jennifer"
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>Summer BBQ</span><br />
                            Wish I could come, but I&apos;m out of town this weekend.
                        </p>
                    }
                    secondaryTextLines={2}
                />
                <Divider inset={true} />
                <ListItem
                    leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
                    rightIconButton={rightIconMenu}
                    primaryText="Grace Ng"
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>Oui oui</span><br />
                            Do you have any Paris recs? Have you ever been?
                        </p>
                    }
                    secondaryTextLines={2}
                />
                <Divider inset={true} />
                <ListItem
                    leftAvatar={<Avatar src="images/kerem-128.jpg" />}
                    rightIconButton={rightIconMenu}
                    primaryText="Kerem Suer"
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>Birthday gift</span><br />
                            Do you have any ideas what we can get Heidi for her birthday? How about a pony?
                        </p>
                    }
                    secondaryTextLines={2}
                />
                <Divider inset={true} />
                <ListItem
                    leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
                    rightIconButton={rightIconMenu}
                    primaryText="Raquel Parrado"
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>Recipe to try</span><br />
                            We should eat this: grated squash. Corn and tomatillo tacos.
                        </p>
                    }
                    secondaryTextLines={2}
                />
            </List>
        </div>
    </div>
);

export default ListExampleMessages;