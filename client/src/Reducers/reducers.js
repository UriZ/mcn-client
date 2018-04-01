import {
    LOGIN,
    LOGOUT,
    POPULATE_FEED
} from '../Actions/actions'

let initialState = {
    loggedIn: false,
    feed:[]
}

function mcnReduce(state = initialState, action) {


    if (action.type === "LOGIN")

    {
        // switch state to logged in
        return Object.assign({}, state, {
            loggedIn: true
        })
    }
    else if (action.type === "LOGOUT"){

        alert(action.text);
        return Object.assign({}, state, {
            loggedIn: false
        })
    }
    else if (action.type === "POPULATE_FEED"){
        return Object.assign({}, state, {
            feed: action.payload
        })
    }
    else{
        return state;

    }

}


export default mcnReduce;