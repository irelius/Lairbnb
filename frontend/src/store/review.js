import { csrfFetch } from "./csrf"

const LOAD_REVIEW = "/review/load"
const LOAD_REVIEWS = "/reviews/load"
const ADD_REVIEW = "/reviews/add"
const EDIT_REVIEW = "/reviews/edit"
const DELETE_REVIEW = "/reviews/delete"
const CLEAR_REVIEW = "/reviews/clear"

const initialReviews = {
    user: {},
    all: {},
}

export const loadReview = (review) => {
    return {
        type: LOAD_REVIEW,
        payload: review
    }
}

export const loadReviews = (reviews) => {
    return {
        type: LOAD_REVIEWS,
        payload: reviews
    }
}

export const loadReviewsThunk = (spotId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/spot/${spotId}`)

    const allReviews = await response.json();

    await dispatch(loadReviews(allReviews))
    return response;
}


export const loadUserReviewThunk = (spotId) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/spot/${spotId}/current`)


    if (res.ok) {
        const userReview = await res.json()
        dispatch(loadReview(userReview))
        return userReview
    }
    return null;
}


export const addReview = (review) => {
    return {
        type: ADD_REVIEW,
        payload: review
    }
}

export const addReviewThunk = (review) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/spot/${review.spotId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(review)
    })

    if (response.ok) {
        const newReview = await response.json();
        dispatch(addReview(newReview))
    }
}

// export const editReview = (review) => {
//     return {
//         type: EDIT_REVIEW,
//         payload: review
//     }
// }

// export const editReviewThunk = (spotId, editReview) => async dispatch => {
//     const response = await csrfFetch(`/api/reviews/${spotId}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(editReview)
//     })
//     console.log(await response.json())

//     if(response.ok) {
//         const review = await response.json();
//         dispatch(editReview(review))
//     }
// }



export const deleteReview = (review) => {
    return {
        type: DELETE_REVIEW,
        payload: review
    }
}

export const deleteReviewThunk = (reviewId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE"
    })

    if (response.ok) {
        dispatch(deleteReview(reviewId))
        console.log("Review successfully deleted.")
    }
}

export const resetReview = () => {
    return {
        type: CLEAR_REVIEW
    }
}


// ----------------------------------------------------------------------------------------------------------
const reviewReducer = (state = initialReviews, action) => {
    const newState = { ...state }
    switch (action.type) {
        case LOAD_REVIEW:

            newState.user = { ...action.payload[0] }
            return newState
        case LOAD_REVIEWS:
            action.payload.forEach(el => {
                newState.all[el.id] = el
            })
            return newState;
        case ADD_REVIEW:
            newState[action.payload.id] = action.payload;
            return newState;
        case EDIT_REVIEW:
            newState[action.payload.spotId] = action.payload;
            return newState;
        case DELETE_REVIEW:
            return {
                user: {},
                all: { ...newState.all }
            }
        case CLEAR_REVIEW:
            return {
                user: {},
                all: {},
            }
        default:
            return newState;

    }
}

export default reviewReducer
