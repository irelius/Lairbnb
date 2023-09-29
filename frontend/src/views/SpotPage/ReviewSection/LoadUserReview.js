import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import formatMonthAndYear from "../../../utils/formatMonthAndYear";
import { useDispatch } from "react-redux";
import { deleteReviewThunk, loadReviewsThunk } from "../../../store/review";

const LoadUserReview = ({userReview, user, spotId}) => {
    const history = useHistory();
    const dispatch = useDispatch()

    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(deleteReviewThunk(userReview.id))
        dispatch(loadReviewsThunk(spotId))
    }

    // if user is not logged in, ask user to log in
    if (user === -1) {
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
    }
    // if user is logged in, but there's no review, give option to submit a review
    else if (user.id && Object.keys(userReview).length === 0) {
        return (
            <div id="submit-review-button" className="black-border semi-bold pointer f7f7f7-bg-hover" onClick={() => history.push(`/submit-review/${spotId}`)}>
                Submit a Review
            </div>
        )
    }
    // if user is logged in and there's a review made by user
    else {
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

export default LoadUserReview;
