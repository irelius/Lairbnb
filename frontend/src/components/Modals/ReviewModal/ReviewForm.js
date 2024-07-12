import "./ReviewForm.css"

import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { addReviewThunk } from "../../../store/review"

// to do:
// verify that the host is not submitting a review
// verify that the user submitting a review has booked the location

function ReviewForm({ setShowReviewForm, setReviewSubmitted }) {
    const dispatch = useDispatch()
    const spotId = useParams().spotId;

    const [review, setReview] = useState("")
    const [stars, setStars] = useState(null)
    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = {
            spotId: spotId,
            review,
            stars
        }

        dispatch(addReviewThunk(newReview)).catch(
            async (res) => {
                const data = await res.json()
                if (data && data.errors) {
                    setErrors(data.errors)
                }
            }
        )
        setReviewSubmitted(prev => !prev)
    }

    const handleStarSelection = (rating) => {
        if ("stars" in errors) {
            const newErrors = { ...errors }
            delete newErrors.stars
            setErrors({ ...newErrors })
        }
        setStars(rating)
    }

    const handleReviewChange = (review) => {
        if ("review" in errors) {
            const newErrors = { ...errors }
            delete newErrors.review
            setErrors({ ...newErrors })
        }
        setReview(review.trim())
    }

    return (
        <div className="review-form-container" onClick={(e) => e.stopPropagation()}>
            <section className="review-exit-button mouse-pointer bg-off-white-hover" onClick={() => { setShowReviewForm(false) }}>
                <i className="fa-solid fa-xmark" />
            </section>
            <div className="review-form-section">
                <form onSubmit={(e) => {
                    e.stopPropagation()
                    handleSubmit(e)
                }} className="review-form">
                    <section className="review-form-title">Leave Your Review</section>

                    <textarea
                        className="review-input"
                        type="text"
                        value={review}
                        onChange={(e) => handleReviewChange(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                    />

                    <section className="star-container">
                        <i className={`star-${stars >= 1 ? "selected" : "unselected"}  mouse-pointer fa-solid fa-star fa-xl`} onClick={() => { handleStarSelection(1) }}></i>
                        <i className={`star-${stars >= 2 ? "selected" : "unselected"}  mouse-pointer fa-solid fa-star fa-xl`} onClick={() => { handleStarSelection(2) }}></i>
                        <i className={`star-${stars >= 3 ? "selected" : "unselected"}  mouse-pointer fa-solid fa-star fa-xl`} onClick={() => { handleStarSelection(3) }}></i>
                        <i className={`star-${stars >= 4 ? "selected" : "unselected"}  mouse-pointer fa-solid fa-star fa-xl`} onClick={() => { handleStarSelection(4) }}></i>
                        <i className={`star-${stars >= 5 ? "selected" : "unselected"}  mouse-pointer fa-solid fa-star fa-xl`} onClick={() => { handleStarSelection(5) }}></i>
                    </section>

                    <section className="review-error-container m-l-20">
                        <section className={`${"review" in errors ? "error-open" : "error-close"}`}>
                            <section className="overflow-hidden">
                                <i className="m-r-5 fa-solid fa-circle-exclamation"></i>
                                {errors.review}
                            </section>
                        </section>
                        <section className={`${"stars" in errors ? "error-open" : "error-close"}`}>
                            <section className="overflow-hidden">
                                <i className="m-r-5 fa-solid fa-circle-exclamation"></i>
                                {errors.stars}
                            </section>
                        </section>
                    </section>

                    <button
                        type="submit"
                        className="submit-review-button mouse-pointer bg-white border-none"
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
