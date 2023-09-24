// frontend/src/store/session.js
import { csrfFetch } from "./csrf";

const SET_USER = "user/setUser";
const REMOVE_USER = "user/removeUser";

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


export const loginThunk = (user) => async (dispatch) => {
    const { email, password } = user;
    const response = await csrfFetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
        }),
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};


export const restoreUserThunk = () => async (dispatch) => {
    const response = await csrfFetch("/api/users/restore");
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};


const initialState = { user: null };

const userReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case SET_USER:
            newState.user = action.payload;
            return newState;
        case REMOVE_USER:
            newState.user = null;
            return newState;
        default:
            return state;
    }
};

export default userReducer;
