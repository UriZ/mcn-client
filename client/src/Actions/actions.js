
export const POPULATE_FEED = "POPULATE_FEED";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GETTING_FEED_DATA = "GETTING_FEED_DATA";
export const ERROR_GETTING_FEED = "ERROR_GETTING_FEED";
export const GET_USER_PREF = "GET_USER_PREF";

export function errorGettingFeed(){
    return {
        type: ERROR_GETTING_FEED,
    }
};

export function login(text) {
    return { type: LOGIN, text }
};

export function logout(text) {
    return { type: LOGOUT, text }
};

export function getUserPref(prefObject) {
    return {
        type: GET_USER_PREF,
        payload:prefObject
    }
};

export function gettingFeedData(){
    return {
        type:GETTING_FEED_DATA,
    }
}

export function popUlateFeed(jsonArray){
    return {
        type: POPULATE_FEED,
        payload: jsonArray,
        text: "updating feed data",
    }
};

