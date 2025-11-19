import "./UserReviewSection.css";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteReviewThunk } from "../../../store/review";
import formatMonthAndYear from "../../../utils/formatMonthAndYear";
import LoginForm from "../../../components/Modals/LoginModal/LoginForm";
import ReviewForm from "../../../components/Modals/ReviewModal/ReviewForm";
import EditReviewForm from "../../../components/Modals/EditReviewModal/EditReviewForm";

function UserReviewSection({ user, reviews, spot, setReviewSubmitted, setReviewEdited, setReviewDeleted }) {
	const [showLoginForm, setShowLoginForm] = useState(false);
	const [showReviewForm, setShowReviewForm] = useState(false);
	const [showEditReviewForm, setShowEditReviewForm] = useState(false);

	const userReview = reviews.userReviews[reviews.userReviewsId[0]];

	const [userReviewDate, setUserReviewDate] = useState();

	useEffect(() => {
		if (userReview) {
			setUserReviewDate(formatMonthAndYear(userReview.createdAt.slice(0, 10)));
		}
	}, [userReview]);

	const dispatch = useDispatch();

	const handleDelete = async (e) => {
		e.preventDefault();
		dispatch(deleteReviewThunk(userReview.id));
		setReviewDeleted((prev) => !prev);
	};

	// If user is not logged in
	return user.loggedIn === false ? (
		<div>
			<section className="df-r gap-5">
				Please
				<p className="mouse-pointer font-semi-bold font-underline" onClick={() => setShowLoginForm(true)}>
					log in
				</p>
				to submit a review.
			</section>

			{showLoginForm ? (
				<div className="modal" onClick={() => setShowLoginForm(false)}>
					<LoginForm setShowLoginForm={setShowLoginForm} />
				</div>
			) : (
				<></>
			)}
		</div>
	) : // if user is the owner of the spot
	user.user.id === spot.ownerId ? (
		// host cannot review their own spot
		<></>
	) : // If user is logged in AND has no reviews
	user.loggedIn === true && reviews.userReviewsId.length === 0 ? (
		<div className="submit-review-container">
			<section
				className="submit-review-button border-black font-semi-bold mouse-pointer bg-off-white-hover"
				onClick={() => setShowReviewForm(true)}>
				Submit a Review
			</section>

			{/* show review form to create a new review */}
			{showReviewForm ? (
				<section className="modal" onClick={() => setShowReviewForm(false)}>
					<ReviewForm setShowReviewForm={setShowReviewForm} setReviewSubmitted={setReviewSubmitted} />
				</section>
			) : (
				<></>
			)}
		</div>
	) : (
		// if user is logged in and there's a review made by user
		<div className="user-review-section">
			<section className="user-review-info-container">
				<aside className="review-user-info">
					<aside className="review-icon-container">{user.user.firstName[0]}</aside>
					<aside>
						<section className="font-semi-bold">
							{user.user.firstName} {user.user.lastName}
						</section>
						<section className="review-date">{userReviewDate}</section>
					</aside>
				</aside>
				<section className="review-edit-container hover-hidden">
					{/* edit review button */}
					<aside className="review-edit">
						<i
							className="mouse-pointer fa-regular fa-pen-to-square fa-xl"
							onClick={(e) => {
								setShowEditReviewForm(true);
							}}
						/>
					</aside>

					{/* delete review button */}
					<aside className="review-delete">
						<i
							className="mouse-pointer fa-regular fa-circle-xmark fa-xl"
							onClick={(e) => {
								handleDelete(e);
								setShowReviewForm(false);
							}}></i>
					</aside>
				</section>

				{/* show edit review form to edit an existing review */}
				{showEditReviewForm ? (
					<div className="modal" onClick={() => setShowEditReviewForm(false)}>
						<EditReviewForm
							userReview={userReview}
							setShowEditReviewForm={setShowEditReviewForm}
							setReviewEdited={setReviewEdited}
						/>
					</div>
				) : (
					<></>
				)}
			</section>
			<section className="user-review m-b-10">{userReview.review}</section>
		</div>
	);
}

export default UserReviewSection;
