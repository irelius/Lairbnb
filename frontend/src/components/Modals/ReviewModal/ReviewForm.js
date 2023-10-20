import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { addReviewThunk } from "../../../store/review"

// to do:
// verify that the host is not submitting a review
// verify that the user submitting a review has booked the location

function ReviewForm({ closeModal }) {
    const dispatch = useDispatch()
    const spotId = useParams().spotId;

    const [review, setReview] = useState("")
    const [stars, setStars] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = {
            spotId: spotId,
            review,
            stars
        }

        dispatch(addReviewThunk(newReview))
        closeModal()
    }

    return (
        <div id="submit-review-main">
            <form onSubmit={(e) => {
                e.stopPropagation()
                handleSubmit(e)
            }} id="review-form">
                <p id="review-title">Type Your Review</p>
                <input
                    type="text"
                    required
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                />
                <p id="review-title">Give This Location a Rating</p>
                <input
                    type="number"
                    required
                    min="1"
                    max="5"
                    value={stars}
                    onChange={(e) => setStars(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                />
                <button
                    type="submit"
                    id="submit-review-button"
                    className="ffffff-bg no-border"
                    onClick={(e) => e.stopPropagation()}
                >
                    Submit Review
                </button>
            </form>
        </div >
    )
}

export default ReviewForm
