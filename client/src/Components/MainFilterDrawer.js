import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FilterDrawer from "./FilterDrawer";

export default class MainFilterDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
                <RaisedButton
                    label="filter"
                    onClick={this.handleToggle}
                />
                <Drawer open={this.state.open}>
                    <FilterDrawer filterValues={["bitcoin", "dogcoin", "ether", "lumicoin"]} onParentClick={this.handleToggle.bind(this)}/>
                </Drawer>
            </div>
        );
    }
}