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

    const [load, setLoad] = useState(false)
    const user = useSelector(state => state.user)

    useEffect(() => {
        dispatch(loadSpotReviewsThunk(spotId))
        dispatch(loadSpotThunk(spotId))
        setLoad(true)
    }, [dispatch, spotId, user])

    const spot = useSelector(state => state.spot.spots[spotId])
    const reviews = useSelector(state => state.review)

    // const [load, setLoad] = useState(false)
    // const [spotOwner, setSpotOwner] = useState(null)
    // const [rating, setRating] = useState()
    // const [updateReviewAndRating, setUpdateReviewAndRating] = useState(false)
    // const [reviewDeleted, setReviewDeleted] = useState(false)

    // const allReviews = useSelector(state => state.review.all)
    // // const userReview = useSelector(state => state.review.user)

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


    return spot && load ? (
        <div>
            <section><SpotSection spot={spot} reviews={reviews} /></section>
            <section><UserReviewSection user={user} reviews={reviews} /></section>
            <section><OtherReviewSection reviews={reviews}/></section>
        </div>
    ) : (
        <></>
    )

    // return load ? (
    //     <div id="spot-detail-main">
    //         <section>
    //             <SpotSection spot={spot} rating={rating} allReviews={allReviews} spotOwner={spotOwner} />
    //         </section>

    //         <section id="spot-line"></section>

    //         {/* Review Header section */}
    //         <section id="review-section">
    //             <section id="review-header">
    //                 <aside>
    //                     <i id="spot-star-icon" className="fa-solid fa-star fa"></i>
    //                     <p className="semi-bold">
    //                         {rating}
    //                     </p>
    //                 </aside>
    //                 <aside>-</aside>
    //                 <aside className="semi-bold">
    //                     {Object.values(allReviews).length} reviews
    //                 </aside>
    //             </section>
    //             <section id="reviews">
    //                 <section>
    //                     <UserReviewSection user={user} spotId={spotId} setUpdateReviewAndRating={setUpdateReviewAndRating} setReviewDeleted={setReviewDeleted} />
    //                 </section>
    //                 <section id="other-reviews-container">
    //                     <OtherReviewSection allReviews={allReviews} user={user} />
    //                 </section>
    //             </section>
    //         </section>
    //     </div>
    // ) : (
    //     <></>
    // )
}

export default SpotPage
