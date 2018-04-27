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

    // open / close drawer
    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
                <RaisedButton
                    label="filter"
                    onClick={this.handleToggle}
                />
                <Drawer open={this.state.open} width="100%">
                    <FilterDrawer filterName="action" defaultChecked={"buy"} filterValues={["buy", "sell", "all"]} toggleParent={this.handleToggle.bind(this)}/>
                    <FilterDrawer filterName="coin" defaultChecked={"bitcoin"} filterValues={["bitcoin", "dogcoin", "ether", "lumicoin"]} toggleParent={this.handleToggle.bind(this)}/>
                    <FilterDrawer filterName="amount" defaultChecked={"100$"} filterValues={["100$", "1000$", "5k$", ">10k$"]} toggleParent={this.handleToggle.bind(this)}/>
                    <FilterDrawer filterName="connection" defaultChecked={"all"} filterValues={["all", "1st", "1st + 2nd"]} toggleParent={this.handleToggle.bind(this)}/>

                </Drawer>
            </div>
        );
    }
}