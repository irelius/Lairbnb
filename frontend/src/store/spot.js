import { csrfFetch } from "./csrf"

const LOAD_SPOT = "/spot/load"
const LOAD_SPOTS = "/spots/load"
const ADD_SPOT = "/spots/add"
const EDIT_SPOT = "/spots/edit"
const DELETE_SPOT = "/spots/delete"
const CLEAR_SPOT = "/spots/clear"

const initialSpot = {}

export const loadSpot = (spot) => {
    return {
        type: LOAD_SPOT,
        payload: spot
    }
}

export const loadSpots = (spots) => {
    return {
        type: LOAD_SPOTS,
        payload: spots
    }
}

// thunk action for all spots
export const loadAllSpotsThunk = () => async (dispatch) => {
    try {
        const response = await csrfFetch('/api/spots');
        if (response.ok) {
            const allSpots = await response.json();
            dispatch(loadSpots(allSpots));
        }
    } catch (error) {
        console.error("Error loading spots:", error);
    }
    return []
};

// thunk action for one specific spot
export const loadSpotThunk = (spotId) => async (dispatch) => {
    try {
        const res = await csrfFetch(`/api/spots/${spotId}`)
        if (res.ok) {
            const spot = await res.json();
            dispatch(loadSpot(spot))
        }
    } catch (error) {
        console.log("Error loading one spot:", error)
    }
    return []
}

// thunk action for user's listings/spots
export const loadUserSpotsThunk = () => async (dispatch) => {
    try {
        const res = await csrfFetch(`/api/spots/current`)
        if (res.ok) {
            const userSpots = await res.json();
            dispatch(loadSpots(userSpots))
        }
    } catch (error) {
        console.log('Error loading user spots:', error)
    }
    return []
}

export const addSpot = (newSpot) => {
    return {
        type: ADD_SPOT,
        payload: newSpot
    }
}

export const addSpotThunk = (newSpot) => async dispatch => {
    const response = await csrfFetch("/api/spots/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newSpot)
    })

    if (response.ok) {
        const spot = await response.json();
        dispatch(addSpot(spot))
    }
}

export const editSpot = (spot) => {
    return {
        type: EDIT_SPOT,
        payload: spot
    }
}

export const editSpotThunk = (spotId, spotDetails) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(spotDetails)
    })

    if (response.ok) {
        const spot = await response.json();
        dispatch(editSpot(spot))
    }
}

export const deleteSpot = (spot) => {
    return {
        type: DELETE_SPOT,
        payload: spot
    }
}

export const deleteSpotThunk = (deleteSpot) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${deleteSpot.id}`, {
        method: "DELETE"
    })

    if (response.ok) {
        console.log("Listing successfully deleted.")
    }
}

export const resetSpot = () => {
    return {
        type: CLEAR_SPOT
    }
}

// ----------------------------------------------------------------------------------------------------------
const spotReducer = (state = initialSpot, action) => {
    const newState = { ...state }
    switch (action.type) {
        case LOAD_SPOT:
            return action.payload
        case LOAD_SPOTS:
            const spots = {}

            if (!action.payload.Spots) {
                return spots
            }

            action.payload.Spots.forEach((el, i) => {
                spots[el.id] = el
            })

            return spots
        case ADD_SPOT:
            newState[action.payload.id] = action.payload
            return newState;
        case EDIT_SPOT:
            newState[action.payload.id] = action.payload;
            return newState;
        case DELETE_SPOT:
            delete newState[action.payload.id]
            return newState;
        case CLEAR_SPOT:
            return initialSpot
        default:
            return newState;
    }
}

export default spotReducer
