import {
    LOGIN,
    LOGOUT,
    POPULATE_FEED
} from '../Actions/actions'

let initialState = {
    loggedIn: false,
    feed:[],
    isFeedLoading:false,
    userPref:{}
    // loading:false
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
            loggedIn: false,
            isFeedLoading:false

        })
    }
    else if (action.type === "POPULATE_FEED"){
        return Object.assign({}, state, {
            feed: action.payload,
            isFeedLoading:false

        })
    }
    else if (action.type === "GETTING_FEED_DATA"){
        return Object.assign({}, state, {
            feed: [],
            isFeedLoading:true

        })
    }
    else if (action.type === "ERROR_GETTING_FEED"){
        return Object.assign({}, state, {
            feed: null,
            isFeedLoading:false

        })
    }
    else if (action.type === "GET_USER_PREF"){
        return Object.assign({}, state, {
            userPref:action.payload
        })
    }

    else{
        return state;

    }

}


export default mcnReduce;