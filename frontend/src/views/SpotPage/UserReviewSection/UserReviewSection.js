import "./UserReviewSection.css"

import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteReviewThunk } from "../../../store/review";
import formatMonthAndYear from "../../../utils/formatMonthAndYear";
import LoginForm from "../../../components/Modals/LoginModal/LoginForm";
import ReviewForm from "../../../components/Modals/ReviewModal";

// { user, spotId, setUpdateReviewAndRating, setReviewDeleted }
function UserReviewSection({ user, reviews }) {
    const [showLoginForm, setShowLoginForm] = useState(false)
    const [showReviewForm, setShowReviewForm] = useState(false)

    const userReview = reviews.userReviews[reviews.userReviewsId[0]]

    const dispatch = useDispatch()

    const handleDelete = (e) => {
        e.preventDefault()
        setShowReviewForm(false)
        dispatch(deleteReviewThunk(userReview.id))
    }

    // If user is not logged in
    return user.loggedIn === false ? (
        <div>
            <section className="df-r gap-5">
                Please <p className="mouse-pointer font-semi-bold font-underline" onClick={() => setShowLoginForm(true)}>log in</p> to submit a review.
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
        <div className="submit-review-container">
            <section className="submit-review-button border-black font-semi-bold mouse-pointer bg-off-white-hover" onClick={() => setShowReviewForm(true)}>
                Submit a Review
            </section >

            {showReviewForm ? (
                <section className="modal" onClick={() => setShowReviewForm(false)}>
                    <ReviewForm setShowReviewForm={setShowReviewForm}/>
                </section>
            ) : (
                <></>
            )}
        </div>

        // if user is logged in and there's a review made by user
    ) : (
        <div className="user-review-section">
            <section className="user-review-info-container">
                <aside className="review-user-info">
                    <aside className='review-icon-container'>
                        {user.user.firstName.slice(0, 1)}
                    </aside>
                    <aside>
                        <section className="font-semi-bold">
                            {user.user.firstName} {user.user.lastName}
                        </section>
                        <section className="review-date">
                            {formatMonthAndYear(userReview.createdAt.slice(0, 10))}
                        </section>
                    </aside>
                </aside>
                <section className="review-edit-container hover-hidden">
                    <aside className="review-edit">
                        <i className="mouse-pointer fa-regular fa-pen-to-square fa-xl"></i>
                    </aside>
                    <aside className="review-delete">
                        <i className="mouse-pointer fa-regular fa-circle-xmark fa-xl" onClick={(e) => { handleDelete(e) }}></i>
                    </aside>
                </section>
            </section>
            <section className="user-review m-b-10">
                {userReview.review}
            </section>
        </div>
    )
}

export default UserReviewSection
