import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './FeedFilter.css';

const items = [
    <MenuItem key={1} value={1} primaryText="Never" />,
    <MenuItem key={2} value={2} primaryText="Every Night" />,
    <MenuItem key={3} value={3} primaryText="Weeknights" />,
    <MenuItem key={4} value={4} primaryText="Weekends" />,
    <MenuItem key={5} value={5} primaryText="Weekly" />,
];

/**
 * `SelectField` supports a floating label with the `floatingLabelText` property.
 * This can be fixed in place with the `floatingLabelFixed` property,
 * and can be customised with the `floatingLabelText` property.
 */
export default class SelectFieldExampleFloatingLabel extends Component {


    constructor(props){
        super(props);
        this.state = {
            value: null,
        };
    }


    handleChange = (event, index, value) => this.setState({value});

    renderItems() {

        let items =  this.props.items.map((elem, index)=>{

            return (


                <MenuItem key={index} value={index} primaryText={elem} />
            )

        });
        return items;


    }


    render() {
        return (

            <MuiThemeProvider>
            <div>
                <SelectField
                    value={this.state.value}
                    onChange={this.handleChange}
                    floatingLabelText="Floating Label Text"
                >
                    {items}
                </SelectField>
                <br />
                <SelectField
                    value={this.state.value}
                    onChange={this.handleChange}
                    floatingLabelText="Floating Label Text"
                    floatingLabelFixed={true}
                    hintText="Hint text"
                >
                    {items}
                </SelectField>
                <br />
                <SelectField
                    autoWidth = {true}
                    value={this.state.value}
                    onChange={this.handleChange}
                    floatingLabelText={this.props.label}
                    menuStyle = {{
                        color: 'red'

                    }}
                    floatingLabelStyle={{backgroundColor: "#d2fbff",

                        color: '#2c5a71'}}
                    style={{
                        margin: '0 auto',
                        border: '2px solid #FF9800',
                        backgroundColor: '#ffd699',
                        borderRadius: '25px'
                    }}
                >
                    {this.renderItems()}
                </SelectField>
            </div>
            </MuiThemeProvider>

                );
    }
}