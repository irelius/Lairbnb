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

export const addImage = (imageUpload) => {
    return {
        type: ADD_IMAGE,
        payload: imageUpload
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
export const loadImageThunk = (type, typeId) => async (dispatch) => {
    try {
        const res = await csrfFetch(`/api/images/${type}/${typeId}`)
        if (res.ok) {
            const image = await res.json();
            dispatch(loadImages(image))
        }
    } catch (e) {
        console.error("Error loading image:", e)
    }

    return []
}

// thunk action to get all images
export const loadAllImagesThunk = (type) => async (dispatch) => {
    try {
        const res = await csrfFetch(`/api/images/${type}`);
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


// export const addImageThunk = (image) => async dispatch => {
//     try {
//         const response = await csrfFetch(`/api/images`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(image)
//         })

//         if (response.ok) {
//             const image = await response.json();
//             dispatch(addImage(image))
//         }
//     } catch (e) {
//         console.error(e)
//     }

// }

// Revised thunk action for AWS S3
export const addImageThunk = (imageUpload) => async dispatch => {
    try {
        const { images, type, typeId, userId } = imageUpload;

        const formData = new FormData();
        formData.append("type", type)
        formData.append("typeId", typeId)
        formData.append("userId", userId)

        // TO DO: catch if user is uploading no images
        if (images && images.length === 1) {
            formData.append("images", images[0])
        } else if (images && images.length > 1) {
            for (let i = 0; i < images.length; i++) {
                formData.append("images", images[i])
            }
        }

        const response = await csrfFetch(`/api/images/${type}/${typeId}`, {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body: formData
        })

        const test = await response.json()

        // if(res.ok) {
        //     const images = await res.json()
        // } else {
        //     dispatch(addImage(data.imageUpload))
        // }

    } catch (e) {
        console.error("Error uploading image: ", e)
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
        dispatch(deleteImage(imageId))
        console.log("Listing successfully deleted.")
    }
}

const imageState = {
    images: {},
    imageIds: []
}

// ----------------------------------------------------------------------------------------------------------
const imageReducer = (state = imageState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case LOAD_IMAGE:
            newState.images = { [action.payload.images.id]: { ...action.payload.images } }
            newState.imageIds = [action.payload.images.id]
            return newState
        case LOAD_IMAGES:
            const loadImageIds = []
            const loadImages = {}

            for (let i = 0; i < action.payload.images.length; i++) {
                let currImage = action.payload.images[i]
                loadImages[currImage.id] = currImage
                loadImageIds.push(currImage.id)
            }

            newState.images = loadImages
            newState.imageIds = loadImageIds

            return newState
        case ADD_IMAGE:
            // let newImage = action.payload
            // newState.byId[newImage.id] = newImage
            // newState.allIds.push(newImage.id)

            return newState;
        // case EDIT_IMAGE:
        //     newState[action.payload.id] = action.payload;
        //     return newState;
        case DELETE_IMAGE:
            delete newState.byId[action.payload]
            const indexToDelete = imageState.allIds.indexOf(action.payload)
            imageState.allIds.splice(indexToDelete, 1)

            return newState;
        default:
            return newState;
    }
}

export default imageReducer
