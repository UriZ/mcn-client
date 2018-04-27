import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class FilterDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false, checked : this.props.defaultChecked};
    }

    /**
     *  open/close this drawer
     */
    handleToggle = ()=>{
        this.setState({open: !this.state.open});
    }


    menuItemClicked(elem){
        // close this drawer
        this.handleToggle();

        // close parent
        this.props.toggleParent();

        // set current checked element
        this.setState({checked:elem})
    }


    render() {

        // render the filter options as menu items
        let filterOptions =  this.props.filterValues.map((elem, index)=>{

            // is this element the checked element?
            let isChecked = this.state.checked === elem ? true : false;

            return (
                <MenuItem onClick={this.menuItemClicked.bind(this,elem)} checked={isChecked}>
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
            {filterOptions}
        </Drawer>
    </div>
)
    }
}