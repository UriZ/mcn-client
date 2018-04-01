export function login(text) {
    return { type: LOGIN, text }
};

export function logout(text) {
    return { type: LOGOUT, text }
};

export function popUlateFeed(jsonArray){
    return {
        type: POPULATE_FEED,
        payload: jsonArray,
        text: "updating feed data"
    }
};


export const POPULATE_FEED = "POPULATE_FEED";
export const LOGIN = "LOGIN";

export const LOGOUT = "LOGOUT";
