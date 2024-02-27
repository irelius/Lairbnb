import { csrfFetch } from "./csrf"

const LOAD_IMAGE = "/image/load"
const LOAD_IMAGES = "/images/load"
const ADD_IMAGE = "/images/add"
// const EDIT_IMAGE = "/images/edit"
const DELETE_IMAGE = "/images/delete"
const CLEAR_IMAGE = "/images/clear"

export const loadImage = (image) => {
    return {
        type: LOAD_IMAGE,
        payload: image
    }
}

export const loadImages = (images) => {
    return {
        type: LOAD_IMAGES,
        payload: images
    }
}

export const addImage = (newImage) => {
    return {
        type: ADD_IMAGE,
        payload: newImage
    }
}

// export const editImage = (image) => {
//     return {
//         type: EDIT_IMAGE,
//         payload: image
//     }
// }

export const deleteImage = (image) => {
    return {
        type: DELETE_IMAGE,
        payload: image
    }
}

export const resetImage = () => {
    return {
        type: CLEAR_IMAGE
    }
}

// thunk action to get one image
export const loadImageThunk = (imageId) => async (dispatch) => {
    try {
        const res = await csrfFetch(`/api/images/${imageId}`)
        if (res.ok) {
            const image = await res.json();
            dispatch(loadImage(image))
        }
    } catch (e) {
        console.error("Error loading image:", e)
    }

    return []
}

// thunk action to get all images
export const loadAllImagesThunk = () => async (dispatch) => {

    try {
        const res = await csrfFetch(`/api/images`);
        if (res.ok) {
            const images = await res.json();
            dispatch(loadImages(images))
        }
    } catch (e) {
        console.error("Error loading images:", e)
    }
}


// thunk action to get all images for a review or spot
export const loadImagesThunk = (type, typeId) => async (dispatch) => {
    try {
        const res = await csrfFetch(`/api/${type}/${typeId}`)
        if (res.ok) {
            const images = await res.json()
            dispatch(loadImages(images))
        }
    } catch (e) {
        console.error("Ereror loading images:", e)
    }
}


export const addImageThunk = (image) => async dispatch => {
    const response = await csrfFetch(`/api/images/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(image)
    })

    if (response.ok) {
        const image = await response.json();
        dispatch(addImage(image))
    }
}

// export const editImageThunk = (imageId, imageDetails) => async dispatch => {
//     const response = await csrfFetch(`/api/images/${imageId}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(imageDetails)
//     })

//     if (response.ok) {
//         const image = await response.json();
//         dispatch(editImage(image))
//     }
// }

export const deleteImageThunk = (imageId) => async dispatch => {
    const response = await csrfFetch(`/api/images/${imageId}`, {
        method: "DELETE"
    })

    if (response.ok) {
        console.log("Listing successfully deleted.")
    }
}

const imageState = {
    byId: {},
    allIds: []
}

// ----------------------------------------------------------------------------------------------------------
const imageReducer = (state = imageState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case LOAD_IMAGE:
            return action.payload
        case LOAD_IMAGES:
            for (let i = 0; i < action.payload.length; i++) {
                let curr = action.payload[i]
                newState.byId[curr.id] = curr
                newState.allIds.push(curr.id)
            }

            return newState
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
