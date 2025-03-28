// frontend/src/store/user.js
import { csrfFetch } from "./csrf";

const SET_USER = "/users/setUser";
const REMOVE_USER = "/users/removeUser";
const CLEAR_USERS = "/users/clearUser"


const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    };
};

const removeUser = () => {
    return {
        type: REMOVE_USER,
    };
};

export const clearUsers = () => {
    return {
        type: CLEAR_USERS
    }
}


export const loginThunk = (user) => async (dispatch) => {
    const { email, password } = user;
    const response = await csrfFetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
        }),
    });


    if(response.ok) {
        const data = await response.json();
        dispatch(setUser(data.user));
        return response;
    }
};


export const logoutThunk = () => async (dispatch) => {
    const res = await csrfFetch('/api/users/logout', {
        method: 'DELETE',
    });
    dispatch(removeUser());
    return res;
};


export const signupThunk = (user) => async (dispatch) => {
    const { firstName, lastName, email, password } = user;
    const response = await csrfFetch("/api/users/signup", {
        method: "POST",
        body: JSON.stringify({
            firstName,
            lastName,
            email,
            password,
        }),
    });
    if(response.ok) {
        const data = await response.json();
        dispatch(setUser(data.user));
        return response;
    }
};


export const restoreUserThunk = () => async (dispatch) => {
    const response = await csrfFetch("/api/users/restore");
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

const initialState = {
    loggedIn: false
}

const userReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case SET_USER:
            if(action.payload !== null) {
                newState.loggedIn = true;
                newState.user = action.payload
            }
            return newState;
        case REMOVE_USER:
            newState.loggedIn = false
            delete newState.user
            return newState;
        default:
            return state;
    }
};

export default userReducer;
