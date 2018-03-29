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
            // (window.fbAsyncInit());

            window.FB.getLoginStatus(function(response) {
                if (response.status === 'connected') {
                    alert('user is conencted to app and fb ');
                    alert(window.FB.getAuthResponse().accessToken);

                }
                else if (response.status === 'not_authorized')
                {
                    window.FB.login();
                    alert("user logged in to fb but not the app ")
                }
                else {
                    alert("user not logged in to fb or app ")
                    window.FB.login((response)=>{
                        if (response.authResponse) {


                            alert(window.FB.getAuthResponse().accessToken);



                        }
                    });

                }
            });


            // switch state to logged in
            return Object.assign({}, state, {
                loggedIn: true
            })
        case LOGOUT:
            // switch state to logged in
            alert("reduced logout");
            window.FB.logout();






            return Object.assign({}, state, {
                loggedIn: false
            })
        default:
            return state
    }
}


export default mcnReduce;