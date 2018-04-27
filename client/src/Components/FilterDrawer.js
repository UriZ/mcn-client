import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class FilterDrawer extends React.Component {

    constructor(props, filterValues) {
        super(props);
        this.state = {open: false, checked : "bitcoin"};
    }

    // handleToggle = () => this.setState({open: !this.state.open});

    handleToggle = ()=>{

        // close parent drawer
        // this.props.onParentClick();
        // open this drawer
        this.setState({open: !this.state.open});

    }
    render() {

return(
   <div>
        <RaisedButton
        label="filter"
        onClick={this.handleToggle}
        />
        <Drawer open={this.state.open}>
            hellow
        </Drawer>
    </div>
)

        // let filterOptions =  this.props.filterValues.map((elem, index)=>{
        //
        //     let isChecked = this.state.checked == elem ? true : false;
        //
        //     return (
        //         <MenuItem onClick={this.props.onParentClick} checked={isChecked}>
        //             {elem}
        //         </MenuItem>
        //     )
        // });
        //
        //
        //
        //
        //
        // return filterOptions;
    }
}