import "./ReviewForm.css"

import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { addReviewThunk } from "../../../store/review"

// to do:
// verify that the host is not submitting a review
// verify that the user submitting a review has booked the location

function ReviewForm() {
    const dispatch = useDispatch()
    const spotId = useParams().spotId;

    const [review, setReview] = useState("")
    const [stars, setStars] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = {
            spotId: spotId,
            review,
            stars
        }

        dispatch(addReviewThunk(newReview))
    }

    return (
        <div className="review-form-container" onClick={(e) => e.stopPropagation()}>
            <section className="review-exit-button mouse-pointer bg-off-white-hover" onClick={() => { }}>
                <i className="fa-solid fa-xmark" />
            </section>
            <div className="review-form-section">
                <form onSubmit={(e) => {
                    e.stopPropagation()
                    handleSubmit(e)
                }} className="review-form">
                    <section className="review-form-title">Type Your Review</section>

                    <textarea
                        className="review-input border-black"
                        type="text"
                        required
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                    />

                    <section className="">Give This Location a Rating</section>

                    <section className="df-r">
                        <i className={`star-${stars >= 1 ? "selected": "unselected"}  mouse-pointer fa-solid fa-star fa-xl`} onClick={() => {setStars(1)}}></i>
                        <i className={`star-${stars >= 2 ? "selected": "unselected"}  mouse-pointer fa-solid fa-star fa-xl`} onClick={() => {setStars(2)}}></i>
                        <i className={`star-${stars >= 3 ? "selected": "unselected"}  mouse-pointer fa-solid fa-star fa-xl`} onClick={() => {setStars(3)}}></i>
                        <i className={`star-${stars >= 4 ? "selected": "unselected"}  mouse-pointer fa-solid fa-star fa-xl`} onClick={() => {setStars(4)}}></i>
                        <i className={`star-${stars >= 5 ? "selected": "unselected"}  mouse-pointer fa-solid fa-star fa-xl`} onClick={() => {setStars(5)}}></i>
                    </section>

                    <button
                        type="submit"
                        className="submit-review-button bg-white border-none"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Submit Review
                    </button>
                </form>
            </div >
        </div >
    )
}

export default ReviewForm
