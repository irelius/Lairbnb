import "./UserReviewSection.css"

import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteReviewThunk } from "../../../store/review";
import formatMonthAndYear from "../../../utils/formatMonthAndYear";
import LoginForm from "../../../components/Modals/LoginModal/LoginForm";
import ReviewForm from "../../../components/Modals/ReviewModal";

// { user, spotId, setUpdateReviewAndRating, setReviewDeleted }
function UserReviewSection({ user, reviews, setReviewSubmitted }) {
    const [showLoginForm, setShowLoginForm] = useState(false)
    const [showReviewForm, setShowReviewForm] = useState(false)

    const userReview = reviews.userReviews[reviews.userReviewsId[0]]

    const dispatch = useDispatch()

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deleteReviewThunk(userReview.id))
    }

    // If user is not logged in
    return user.loggedIn === false ? (
        <div>
            <section>
                Please <b className="mouse-pointer" onClick={() => setShowLoginForm(true)}>log in</b> to submit a review.
            </section>

            {showLoginForm ? (
                <div className="modal" onClick={() => setShowLoginForm(false)}>
                    <LoginForm setShowLoginForm={setShowLoginForm} />
                </div>
            ) : (
                <></>
            )}
        </div>

        // If user is logged in AND has no reviews
    ) : user.loggedIn === true && reviews.userReviewsId.length === 0 ? (
        <div>
            <section className="submit-review-button border-black font-semi-bold mouse-pointer bg-off-white-hover" onClick={() => setShowReviewForm(true)}>
                Submit a Review
            </section >

            {showReviewForm ? (
                <section className="modal" onClick={() => setShowReviewForm(false)}>
                    <ReviewForm />
                </section>
            ) : (
                <></>
            )}
        </div>

        // if user is logged in and there's a review made by user
    ) : (
        <div className="hidden-container">
            <section className="review-user-info">
                <div className='review-icon-container'>
                    {user.user.firstName.slice(0, 1)}
                </div>
                <aside>
                    <section className="review-name">
                        {user.user.firstName} {user.user.lastName}
                    </section>
                    <section className="review-date">
                        {formatMonthAndYear(userReview.createdAt.slice(0, 10))}
                    </section>
                </aside>
            </section>
            <section className="review">
                {userReview.review}
            </section>
            <section className="review-edit-container">
                <aside className="review-edit">
                    Edit
                </aside>
                <aside className="review-delete">
                    <i className="mouse-pointer fa-regular fa-circle-xmark fa-xl" onClick={(e) => { handleDelete(e) }}></i>
                </aside>
            </section>
        </div>
    )
}

export default UserReviewSection
