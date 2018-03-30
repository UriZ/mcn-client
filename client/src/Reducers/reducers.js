import {
    LOGIN,
    LOGOUT
} from '../Actions/actions'

let initialState = {
    loggedIn: false
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

        return Object.assign({}, state, {
            loggedIn: false
        })


    }
    else{
        return state;

    }

}


export default mcnReduce;