import "./SpotPage.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadSpotReviewsThunk } from "../../store/review";
import { loadSpotThunk } from "../../store/spot";

import calculateStars from "../../utils/calculateStars";
import SpotSection from "./SpotSection/SpotSection";
import OtherReviewSection from "./OtherReviewSection";
import UserReviewSection from "./UserReviewSection/UserReviewSection";

function SpotPage() {
    const dispatch = useDispatch()
    const { spotId } = useParams()

    const [reviewSubmitted, setReviewSubmitted] = useState(false)
    const user = useSelector(state => state.user)

    useEffect(() => {
        dispatch(loadSpotReviewsThunk(spotId))
        dispatch(loadSpotThunk(spotId))
    }, [dispatch, spotId, user, reviewSubmitted])

    const spot = useSelector(state => state.spot.spots[spotId])
    const reviews = useSelector(state => state.review)

    // // fetch the spot's reviews
    // // TO DO: recalculate the spot review and average when use submits a review
    // useEffect(() => {
    //     dispatch(loadReviewsThunk(spotId)).then(() => {
    //         if (user !== -1) { // fetch user's review if logged in
    //             dispatch(loadUserReviewThunk(spotId))
    //         }
    //     })
    //     setLoad(true)

    //     return (() => {
    //         dispatch(resetReview())
    //     })
    // }, [dispatch, user, spotId, updateReviewAndRating, reviewDeleted])


    return spot ? (
        <div className="spot-detail-main">
            <section><SpotSection spot={spot} reviews={reviews} /></section>
            <section className="spot-line"></section>
            {/* Review Header section */}
            <section className="review-section">
                <section className="review-header">
                    <aside>
                        <i className="spot-star-icon fa-solid fa-star fa"></i>
                        <p className="semi-bold">
                            {spot.avgStarRating}
                        </p>
                    </aside>
                    <aside>-</aside>
                    <aside className="semi-bold">
                        {reviews.userReviewsId.length + reviews.allReviewsId.length} reviews
                    </aside>
                </section>
                <section className="reviews">

                    <section><UserReviewSection user={user} reviews={reviews} setReviewSubmitted={setReviewSubmitted} /></section>
                    <section className="other-reviews-container">

                        <section><OtherReviewSection reviews={reviews} /></section>
                    </section>
                </section>
            </section>
        </div >
    ) : (
        <></>
    )
}

export default SpotPage
