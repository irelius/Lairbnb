import { csrfFetch } from "./csrf"

const LOAD_REVIEW = "/review/load"
const LOAD_REVIEWS = "/reviews/load"
const ADD_REVIEW = "/reviews/add"
const EDIT_REVIEW = "/reviews/edit"
const DELETE_REVIEW = "/reviews/delete"
const CLEAR_REVIEW = "/reviews/clear"


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

export const loadSpotReviewsThunk = (spotId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/spots/${spotId}`)


    const allReviews = await response.json();

    await dispatch(loadReviews(allReviews))
    return response;
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
        const review = await response.json()
        dispatch(deleteReview(review))
    }
}

export const resetReview = () => {
    return {
        type: CLEAR_REVIEW
    }
}

const initialReviews = {
    allReviews: {},
    allReviewsId: [],
    userReviews: {},
    userReviewsId: []
}

// ----------------------------------------------------------------------------------------------------------
const reviewReducer = (state = initialReviews, action) => {
    const newState = { ...state }
    switch (action.type) {
        case LOAD_REVIEW:
            newState.user = { ...action.payload[0] }
            return newState
        case LOAD_REVIEWS:
            const loadOtherReviews = {}
            const loadOtherReviewsId = []
            const loadUserReviews = {}
            const loadUserReviewsId = []

            const userReviews = action.payload.userReviews
            const otherReviews = action.payload.otherReviews

            for (let i = 0; i < otherReviews.length; i++) {
                let currReview = otherReviews[i]
                loadOtherReviews[currReview.id] = currReview
                loadOtherReviewsId.push(currReview.id)
            }

            for (let i = 0; i < userReviews.length; i++) {
                let currReview = userReviews[i]
                loadUserReviews[currReview.id] = currReview
                loadUserReviewsId.push(currReview.id)
            }

            newState.allReviews = loadOtherReviews
            newState.allReviewsId = loadOtherReviewsId
            newState.userReviews = loadUserReviews
            newState.userReviewsId = loadUserReviewsId

            return newState;
        case ADD_REVIEW:
            newState.userReviews[action.payload.id] = action.payload;
            newState.userReviewsId.push(action.payload.id)
            return newState;
        case EDIT_REVIEW:
            newState.userReviews[action.payload.id] = action.payload;
            return newState;
        case DELETE_REVIEW:
            const deleteUserReviewId = newState.userReviewsId.filter(el => el !== action.payload.id)
            const deleteOtherUserReviewId = newState.allReviewsId.filter(el => el !== action.payload.id)

            newState.userReviewsId = deleteUserReviewId
            newState.allReviewsId = deleteOtherUserReviewId

            delete newState.userReviews[action.payload.id]
            delete newState.allReviews[action.payload.id]

            return newState
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
