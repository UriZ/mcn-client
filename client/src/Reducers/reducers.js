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
            alert("fb login " + window.FB.login);
            // (window.fbAsyncInit());

            // window.FB.getLoginStatus(function(response) {
            //     if (response.status === 'connected') {
            //         alert('Logged in.');
            //     }
            //     else {
            //         window.FB.login();
            //         alert(window.FB.getAuthResponse().accessToken);
            //
            //     }
            // });

            // setTimeout(function(){ window.FB.login(); }, 5000);

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