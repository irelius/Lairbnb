import "./UserReviewSection.css"

import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import formatMonthAndYear from "../../../utils/formatMonthAndYear";
import { useDispatch, useSelector } from "react-redux";
import { deleteReviewThunk, loadReviewsThunk, loadUserReviewThunk } from "../../../store/review";
import { useEffect, useState } from "react";
import LoginForm from "../../../components/Modals/LoginModal/LoginForm";
import ReviewForm from "../../../components/Modals/ReviewModal";


function UserReviewSection({ user, spotId }) {
    const dispatch = useDispatch()
    const [showLoginForm, setShowLoginForm] = useState(false)
    const [showReviewForm, setShowReviewForm] = useState(false)

    const userReview = useSelector(state => state.review.user)
    const [reviewSubmitted, setReviewSubmitted] = useState(userReview.id !== undefined)

    useEffect(() => {
        dispatch(loadReviewsThunk(spotId))
    }, [dispatch, spotId])

    useEffect(() => {
        dispatch(loadUserReviewThunk(spotId))
    }, [dispatch, reviewSubmitted, spotId])


    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(deleteReviewThunk(userReview.id))
        dispatch(loadReviewsThunk(spotId))
    }

    const closeReviewForm = () => {
        setShowReviewForm(false)
    }



    // if user is not logged in
    return user === -1 ? (
        // did user click on the log in? if yes, open login modal
        showLoginForm ? (
            <div className="modal" onClick={() => setShowLoginForm(false)}>
                <div className="modal-form-container ffffff-bg" onClick={(e) => e.stopPropagation()}>
                    <section id="modal-exit-button" className="pointer f7f7f7-bg-hover" onClick={() => setShowLoginForm(false)}>
                        <i className="fa-solid fa-xmark" />
                    </section>
                    <section className="modal-form-header bbot-235">
                        <section className="bold font-14">
                            Log in
                        </section>
                    </section>
                    <section className="modal-form-body">
                        <section>
                            <LoginForm />
                        </section>
                    </section>
                    {/* <section id="google-login">
                        Google login functionality to be added
                    </section> */}
                </div>
            </div>
        ) : (
            // login section, set login form true when clicked on
            <div id="login-container">
                <div onClick={() => setShowLoginForm(true)}>
                    Please <b className="pointer">log in</b> to submit a review.
                </div>
            </div>
        )

        // if user is logged in, but there's no review, give option to submit a review
    ) : user.id && Object.keys(userReview).length === 0 ? (
        // did user click on the submit review button? if yes, open submit review modal
        showReviewForm ? (
            <div>
                <section id="submit-review-button" className="black-border semi-bold pointer f7f7f7-bg-hover" onClick={() => setShowReviewForm(true)}>
                    Submit a Review
                </section >
                <section className="modal" onClick={() => { setShowReviewForm(false) }}>
                    <ReviewForm closeModal={closeReviewForm} setReviewSubmitted={setReviewSubmitted} />
                </section>
            </div>
        ) : (
            <div>
                <div id="submit-review-button" className="black-border semi-bold pointer f7f7f7-bg-hover" onClick={() => setShowReviewForm(true)}>
                    Submit a Review
                </div >
            </div>
        )

        // if user is logged in and there's a review made by user
    ) : (
        <div className="hidden-container">
            <section id="review-user-info">
                <div id='review-icon-container'>
                    {userReview.User.firstName.slice(0, 1)}
                </div>
                <aside>
                    <section id="review-name">
                        {userReview.User.firstName} {userReview.User.lastName}
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
                    <i className="pointer fa-regular fa-circle-xmark fa-xl" onClick={(e) => { handleDelete(e) }}></i>
                </aside>
            </section>
        </div>
    )
}

export default UserReviewSection
