import React from 'react';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import FilterDrawer from "./FilterDrawer";
//TODO we dont need to keep the user pref as sstate - and update it in store. either or
/**
 * display all the filters as nested drawers
 */
export default class MainFilterDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            userPref:this.props.userPref
        };
    }


    /**
     * set the state according to the pref
     * at the time the constructor is run, we dont necessarily have the updated state (user preferences) from the backend
     * @param nextProps
     * @param prevState
     * @returns {{} & any & {userPref: *|{}|initialState.userPref}}
     */
    static getDerivedStateFromProps(nextProps, prevState) {

        return Object.assign({}, prevState, {
            userPref: nextProps.userPref,
        })
    }


    /**
     * one of the child fitlers was selected - update state
     * @param filterName
     * @param selected
     */
    onPreferenceChanged (filterName, selected){

        let newFilterState = {};
        newFilterState[filterName] = selected;

        // new state of user pref
        let userPref = Object.assign({}, this.state.userPref, newFilterState);

        this.setState({
            open: !this.state.open,
            userPref: userPref
        });

        // update user pref on the backend and on the store
        this.props.updateUserPref(userPref);
    }

    // open / close drawer
    handleToggle = () => {
        this.setState({open: !this.state.open});
    }


    render() {
        let  userPref = this.state.userPref;
        return (
            <div>
                <RaisedButton className={"MainFilterElement"}
                    label="filter"
                    onClick={this.handleToggle}
                />
                <Drawer open={this.state.open} width="100%">
                    <FilterDrawer filterName="operation" defaultChecked={userPref.operation} filterValues={["buy", "sell", "all"]} onPreferenceChanged={this.onPreferenceChanged.bind(this)}/>
                    <FilterDrawer filterName="currency" defaultChecked={userPref.currency} filterValues={["bitcoin", "dogecoin", "ether", "Litecoin"]} onPreferenceChanged={this.onPreferenceChanged.bind(this)}/>
                    <FilterDrawer filterName="amount" defaultChecked={userPref.amount} filterValues={["100$", "1000$", "5k$", ">10k$"]} onPreferenceChanged={this.onPreferenceChanged.bind(this)}/>
                    {/*<FilterDrawer filterName="connection" defaultChecked={"all"} filterValues={["all", "1st", "1st + 2nd"]} onPreferenceChanged={this.onPreferenceChanged.bind(this)}/>*/}
                </Drawer>
            </div>
        );
    }
}