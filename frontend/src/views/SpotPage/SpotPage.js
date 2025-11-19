import "./SpotPage.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadSpotReviewsThunk } from "../../store/review";
import { loadSpotThunk } from "../../store/spot";

// import calculateStars from "../../utils/calculateStars";
import SpotSection from "./SpotSection/SpotSection";
import OtherReviewSection from "./OtherReviewSection";
import UserReviewSection from "./UserReviewSection/UserReviewSection";

function SpotPage() {
	const dispatch = useDispatch();
	const { spotId } = useParams();

	const [load, setLoad] = useState(false);
	const [reviewSubmitted, setReviewSubmitted] = useState(false);
	const [reviewEdited, setReviewEdited] = useState(false);
	const [reviewDeleted, setReviewDeleted] = useState(false);

	const user = useSelector((state) => state.user);

	useEffect(() => {
		dispatch(loadSpotReviewsThunk(spotId));
		dispatch(loadSpotThunk(spotId)).then(() => {
			setLoad(true);
		});
	}, [dispatch, spotId, user, reviewSubmitted, reviewEdited, reviewDeleted]);

	const spot = useSelector((state) => state.spot.spots[spotId]);
	const reviews = useSelector((state) => state.review);

    return load ? (
		<div className="spot-detail-main">
			{/* spot information sectoin */}
			<section>
				<SpotSection spot={spot} />
			</section>

			<section className="spot-line"></section>

			{/* Review Header section */}
			<section className="review-section">
				<section className="review-header gap-5 m-b-20">
					<i className="fa-solid fa-star fa"></i>
					<p className="font-semi-bold">{spot.averageRating}</p>
					<aside>·</aside>
					<aside className="font-semi-bold">{spot.reviewCount} reviews</aside>
				</section>

				<section className="reviews df-c">
					{/* user review section */}
					<section>
						<UserReviewSection
							user={user}
							reviews={reviews}
							spot={spot}
							setReviewSubmitted={setReviewSubmitted}
							setReviewEdited={setReviewEdited}
							setReviewDeleted={setReviewDeleted}
						/>
					</section>

					{/* other user review section */}
					<section className="other-reviews-container">
						<OtherReviewSection reviews={reviews} />
					</section>
				</section>
			</section>
		</div>
	) : (
		<></>
	);
}

export default SpotPage;
