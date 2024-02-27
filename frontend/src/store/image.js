import { csrfFetch } from "./csrf"

const LOAD_IMAGE = "/image/load"
const LOAD_IMAGES = "/images/load"
const ADD_IMAGE = "/images/add"
const EDIT_IMAGE = "/images/edit"
const DELETE_IMAGE = "/images/delete"
const CLEAR_IMAGE = "/images/clear"

export const loadImage = (image) => {
    return {
        type: LOAD_IMAGE,
        payload: image
    }
}

// export const loadSpot = (image) => {
//     return {
//         type: LOAD_IMAGE,
//         payload: image
//     }
// }

// export const loadSpots = (images) => {
//     return {
//         type: LOAD_IMAGES,
//         payload: images
//     }
// }

// // thunk action for all images
// export const loadAllSpotsThunk = () => async (dispatch) => {
//     try {
//         const response = await csrfFetch('/api/images');
//         if (response.ok) {
//             const allSpots = await response.json();
//             dispatch(loadSpots(allSpots));
//         }
//     } catch (error) {
//         console.error("Error loading images:", error);
//     }
//     return []
// };

// // thunk action for one specific image
// export const loadSpotThunk = (imageId) => async (dispatch) => {
//     try {
//         const res = await csrfFetch(`/api/images/${imageId}`)
//         if (res.ok) {
//             const image = await res.json();
//             dispatch(loadSpot(image))
//         }
//     } catch (error) {
//         console.log("Error loading one image:", error)
//     }
//     return []
// }

// // thunk action for user's listings/images
// export const loadUserSpotsThunk = () => async (dispatch) => {
//     try {
//         const res = await csrfFetch(`/api/images/current`)
//         if (res.ok) {
//             const userSpots = await res.json();
//             dispatch(loadSpots(userSpots))
//         }
//     } catch (error) {
//         console.log('Error loading user images:', error)
//     }
//     return []
// }

// export const addSpot = (newSpot) => {
//     return {
//         type: ADD_IMAGE,
//         payload: newSpot
//     }
// }

// export const addSpotThunk = (newSpot) => async dispatch => {
//     const response = await csrfFetch("/api/images/", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newSpot)
//     })

//     if (response.ok) {
//         const image = await response.json();
//         dispatch(addSpot(image))
//     }
// }

// export const editSpot = (image) => {
//     return {
//         type: EDIT_IMAGE,
//         payload: image
//     }
// }

// export const editSpotThunk = (imageId, imageDetails) => async dispatch => {
//     const response = await csrfFetch(`/api/images/${imageId}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(imageDetails)
//     })

//     if (response.ok) {
//         const image = await response.json();
//         dispatch(editSpot(image))
//     }
// }

// export const deleteSpot = (image) => {
//     return {
//         type: DELETE_IMAGE,
//         payload: image
//     }
// }

// export const deleteSpotThunk = (deleteSpot) => async dispatch => {
//     const response = await csrfFetch(`/api/images/${deleteSpot.id}`, {
//         method: "DELETE"
//     })

//     if (response.ok) {
//         console.log("Listing successfully deleted.")
//     }
// }

// export const resetSpot = () => {
//     return {
//         type: CLEAR_IMAGE
//     }
// }

const imageState = {
    byId: {},
    allIds: {}
}

// ----------------------------------------------------------------------------------------------------------
const imageReducer = (state = imageState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case LOAD_IMAGE:
            return action.payload
        // case LOAD_IMAGES:
        //     const images = {}

        //     if (!action.payload.Spots) {
        //         return images
        //     }

        //     action.payload.Spots.forEach((el, i) => {
        //         images[el.id] = el
        //     })

        //     return images
        // case ADD_IMAGE:
        //     newState[action.payload.id] = action.payload
        //     return newState;
        // case EDIT_IMAGE:
        //     newState[action.payload.id] = action.payload;
        //     return newState;
        // case DELETE_IMAGE:
        //     delete newState[action.payload.id]
        //     return newState;
        default:
            return newState;
    }
}

export default imageReducer
