import getMuiTheme from "material-ui/styles/getMuiTheme";
import {
    cyan500, cyan700,
    pinkA200,
    grey100, grey300, grey400, grey500,
    white, darkBlack, fullBlack,
} from "material-ui/styles/colors";

const muiTheme = getMuiTheme({
    // palette: {
    //     textColor: cyan500,
    // },
    // palette: {
    //     primary1Color: cyan500,
    //     primary2Color: cyan700,
    //     primary3Color: grey400,
    //     accent1Color: pinkA200,
    //     accent2Color: grey100,
    //     accent3Color: grey500,
    //     textColor: darkBlack,
    //     alternateTextColor: white,
    //     canvasColor: white,
    //     borderColor: grey300,
    //     pickerHeaderColor: cyan500,
    //     shadowColor: fullBlack,
    // },
    card: {
        titleColor: '#405661',
        subtitleColor: '#405661'
    },
    cardText: {
        textColor: '#405661',
    },
    appBar: {
        color: '#07adbb',
        textColor: '#dcfbff',

    }

});


export default muiTheme;