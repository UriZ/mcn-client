export function login(text) {
    return { type: LOGIN, text }
}

export function logout(text) {
    return { type: LOGOUT, text }
}

export const LOGIN = 'LOGIN'

export const LOGOUT = 'LOGOUT'
