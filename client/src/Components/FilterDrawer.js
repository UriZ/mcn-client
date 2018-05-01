import React from 'react';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';

import MenuItem from 'material-ui/MenuItem';

/**
 * a filter built as a  menu with several meuitems - the filter options
 * when clicked - it passes the selected element to the parent
 */
export default class FilterDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }


    /**
     *  open/close this drawer
     */
    handleToggle = ()=>{
        this.setState({open: !this.state.open});
    }


    menuItemClicked(event, menuItem, index){
        // close this drawer
        this.handleToggle();

        // selected menu item
        let selected = this.props.filterValues[index];

        // let the parent know that selected was selected on this filter
        this.props.onPreferenceChanged(this.props.filterName, selected);
    }


    render() {

        // render the filter options as menu items
        let filterOptions =  this.props.filterValues.map((elem, index)=>{

            // is this element the checked element?
            let isChecked = this.props.defaultChecked === elem ? true : false;

            return (
                    <MenuItem  checked={isChecked}>
                        {elem}
                    </MenuItem>
            )
        });

        return(
           <div>
                {/*open the drawer on click */}
                <MenuItem onClick={this.handleToggle}>
                    {this.props.filterName}
                </MenuItem>

                {/*display the filter options*/}
                <Drawer open={this.state.open} width={"100%"}>
                    <Menu onItemClick={this.menuItemClicked.bind(this)}>
                    {filterOptions}
                    </Menu>
                </Drawer>
            </div>
        )
    }
}