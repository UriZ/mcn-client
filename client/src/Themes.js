import {cyan500} from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";

const muiTheme = getMuiTheme({
    // palette: {
    //     textColor: cyan500,
    // },

    card: {
        titleColor: '#405661',
        subtitleColor: '#405661'
    },
    cardText: {
        textColor: '#405661',
    }
});


export default muiTheme;