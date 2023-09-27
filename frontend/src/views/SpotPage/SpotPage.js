import "./SpotPage.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deleteReviewThunk, loadReviewsThunk, loadUserReviewThunk, resetReview } from "../../store/review";
import { loadSpotThunk, resetSpot } from "../../store/spot";
import { restoreUserThunk } from "../../store/user";

import LoginForm from "../../components/Modals/LoginModal/LoginForm";
import calculateStars from "../../utils/calculateStars";
import formatMonthAndYear from "../../utils/formatMonthAndYear";


function SpotPage() {
    const dispatch = useDispatch()
    const history = useHistory();
    const spotId = useParams().spotId
    const [load, setLoad] = useState(false)
    const [spotOwner, setSpotOwner] = useState(null)

    useEffect(() => {
        dispatch(loadReviewsThunk(spotId))
        if(user > 0) {
            dispatch(loadUserReviewThunk(spotId))
        }
        dispatch(loadSpotThunk(spotId))
        setLoad(true)

        return (() => {
            dispatch(resetSpot())
            dispatch(resetReview())
        })

    }, [dispatch])

    const spot = useSelector(state => state.spot)
    const allReviews = useSelector(state => state.review.all)
    const userReview = useSelector(state => state.review.user)
    const user = useSelector(state => state.user.user) || -1

    console.log('booba', user)

    useEffect(() => {
        if (spot.Owner) {
            setSpotOwner(`${spot.Owner.firstName} ${spot.Owner.lastName}`)
        }
    }, [spot])

    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(deleteReviewThunk(userReview.id))
        dispatch(loadReviewsThunk(spotId))
    }

    const loadUserReview = () => {
        if (!user.id) {
            return (
                <div id="login-container">
                    <div>
                        Please log in to submit a review.
                    </div>
                    {/* <div id="login-button">
                        <LoginForm />
                    </div> */}
                </div>
            )
        } else if (user.id && Object.keys(userReview).length === 0) {
            return (
                <div id="submit-review-button" className="black-border semi-bold pointer f7f7f7-bg-hover" onClick={() => history.push(`/submit-review/${spotId}`)}>
                    Submit a Review
                </div>
            )
        } else {
            return (
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
                        <aside id='review-delete-container' className="hidden">
                            <i className="pointer fa-regular fa-circle-xmark fa-xl" onClick={(e) => { handleDelete(e) }}></i>
                        </aside>
                    </section>
                    <section id="review">
                        {userReview.review}
                    </section>
                </div>
            )
        }
    }

    const loadReview = (reviews) => {
        return (
            Object.values(reviews).map((el, i) => {
                if (el.userId === user.id) {
                    return null;
                } else if (el.User.id) {
                    return (
                        <div id="other-reviews" key={i}>
                            <section id="review-user-info">
                                <div id='review-icon-container'>
                                    {el.User.firstName.slice(0, 1)}
                                </div>
                                <aside>
                                    <section id="review-name">
                                        {el.User.firstName} {el.User.lastName}
                                    </section>
                                    <section id="review-date">
                                        {formatMonthAndYear(el.createdAt.slice(0, 10))}
                                    </section>
                                </aside>
                            </section>
                            <div id="review">
                                {el.review}
                            </div>
                        </div>
                    )
                }
                return null
            })
        )
    }

    return load ? (
        <div id="spot-detail-main">
            <div id="spot-section">
                <div id="spot-header" className="semi-bold">
                    {spot.name}
                </div>
                <div id="spot-subheader">
                    <aside>
                        <i id="spot-star-icon" className="fa-solid fa-star fa"></i>
                        <p className="semi-bold">
                            {calculateStars(allReviews)}
                        </p>
                    </aside>
                    <aside>-</aside>
                    <aside className="bold underline">
                        {Object.values(allReviews).length} reviews
                    </aside>
                    <aside>-</aside>
                    <aside>
                        {spotOwner}
                    </aside>
                    <aside>-</aside>
                    <aside className="semi-bold underline">
                        {spot.city}, {spot.state}, {spot.country}
                    </aside>
                </div>
                {spot.previewImg ? (
                    <img id="spot-header-image" src={`${spot.previewImg}`} alt={`${spot.name}`} />
                ) : (
                    <div></div>
                )}
            </div>
            <div id="spot-line"></div>


            <div id="review-section">
                <div id="review-header">
                    <aside>
                        <i id="spot-star-icon" className="fa-solid fa-star fa"></i>
                        <p className="semi-bold">
                            {calculateStars(allReviews)}
                        </p>
                    </aside>
                    <aside>-</aside>
                    <aside className="semi-bold">
                        {Object.values(allReviews).length} reviews
                    </aside>
                </div>
                <div id="reviews">
                    <div>
                        {loadUserReview()}
                    </div>
                    <div id="other-reviews-container">
                        {loadReview(allReviews)}
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div></div>
    )
}

export default SpotPage
