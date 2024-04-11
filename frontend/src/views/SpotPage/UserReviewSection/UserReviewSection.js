import "./UserReviewSection.css"

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { loadSpotReviewsThunk } from "../../../store/review";
import formatMonthAndYear from "../../../utils/formatMonthAndYear";
import LoginForm from "../../../components/Modals/LoginModal/LoginForm";
import ReviewForm from "../../../components/Modals/ReviewModal";

// { user, spotId, setUpdateReviewAndRating, setReviewDeleted }
function UserReviewSection({ user, reviews, setReviewSubmitted }) {
    const dispatch = useDispatch()
    const { spotId } = useParams()

    const [showLoginForm, setShowLoginForm] = useState(false)
    const [showReviewForm, setShowReviewForm] = useState(false)

    const userReview = reviews.userReviews[reviews.userReviewsId[0]]

    // If user is not logged in
    return user.loggedIn === false ? (
        <div>
            <section>
                Please <b className="pointer" onClick={() => setShowLoginForm(true)}>log in</b> to submit a review.
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
            <section id="submit-review-button" className="black-border semi-bold pointer f7f7f7-bg-hover" onClick={() => setShowReviewForm(true)}>
                Submit a Review
            </section >

            {showReviewForm ? (
                <section className="modal" onClick={() => setShowReviewForm(false)}>
                    <ReviewForm setShowReviewForm={setShowReviewForm} setReviewSubmitted={setReviewSubmitted} />
                </section>
            ) : (
                <></>
            )}
        </div>

        // if user is logged in and there's a review made by user
    ) : (
        <div className="hidden-container">
            <section id="review-user-info">
                <div id='review-icon-container'>
                    {user.user.firstName.slice(0, 1)}
                </div>
                <aside>
                    <section id="review-name">
                        {user.user.firstName} {user.user.lastName}
                    </section>
                    <section id="review-date">
                        {formatMonthAndYear(userReview.createdAt.slice(0, 10))}
                    </section>
                </aside>
            </section>
            <section id="review">
                {userReview.review}
            </section>
            <section id="review-edit-container">
                <aside id="review-edit">
                    {/* TO DO: create edit option */}
                </aside>
                <aside id="review-delete">
                    {/* <i className="pointer fa-regular fa-circle-xmark fa-xl" onClick={(e) => { handleDelete(e) }}></i> */}
                </aside>
            </section>
        </div>
    )
}

export default UserReviewSection
