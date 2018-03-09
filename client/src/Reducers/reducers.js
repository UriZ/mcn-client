import {
    LOGIN,
    LOGOUT
} from '../Actions/actions'


let initialState = {
    loggedIn: false
}

function mcnReduce(state = initialState, action) {
    switch (action.type) {
        case LOGIN:

            alert("reduced login");
            // switch state to logged in
            return Object.assign({}, state, {
                loggedIn: true
            })
        case LOGOUT:
            // switch state to logged in
            alert("reduced logout");




            return Object.assign({}, state, {
                loggedIn: false
            })
        default:
            return state
    }
}


export default mcnReduce;