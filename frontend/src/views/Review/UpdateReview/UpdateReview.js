import "./UpdateReview.css"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { editReviewThunk, loadReviewsThunk } from "../../../store/review";

function UpdateReview() {
    const history = useHistory();
    const currentUser = useSelector(state => state.user.user);
    if (!currentUser) {
        history.push("/")
    }


    const reviewId = useParams();
    const userReview = useSelector(state => state.review);
    const userReviewObject = userReview[reviewId.reviewId]


    let reviewStatus = false;
    if (userReview.reviews.length === 0) {
    } else if (userReviewObject.review) {
        reviewStatus = true;
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadReviewsThunk(userReviewObject.spotId));
    }, [dispatch])




    const loadEditForm = () => {
        if (reviewStatus) {
            return (
                <div>
                    test
                </div>
            )

        }
        // if (userReviewStatus) {
        //     return (
        //         <form onSubmit={handleSubmit}>
        //             <input
        //                 type="text"
        //                 placeholder={`${userReview.review}`}
        //                 required
        //                 value={review}
        //                 onChange={(e) => setReview(e.target.value)}
        //             />
        //             <input
        //                 type="number"
        //                 placeholder={`${userReview.stars}`}
        //                 required
        //                 min="1"
        //                 max="5"
        //                 value={stars}
        //                 onChange={(e) => setStars(e.target.value)}
        //             />
        //             <button type="submit">Edit Review</button>
        //         </form>
        //     )
        // }
    }

    const [review, setReview] = useState("")
    const [stars, setStars] = useState(1)

    const handleSubmit = (e) => {
        e.preventDefault();

        const editReview = {
            review,
            stars
        }

        // dispatch(editReviewThunk(userReview.spotId, editReview))
    }

    return (
        <div id="edit-review-main">
            {loadEditForm()}
        </div>
    )
}

export default UpdateReview;
