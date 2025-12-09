import { useEffect } from "react";
import "./Step1AboutYourPlace.css";

// Create spot step 1 - intro
function Step1AboutYourPlace({ setDisableNextButton }) {
	useEffect(() => {
		setDisableNextButton(false);
	}, []);

	return (
		<div className="create-spot-container step-1-container">
			<aside className="step-1-left-container">
				<section className="step-1-step">Step 1</section>
				<section className="step-1-header">Tell us about your place</section>
				<section className="step-1-desc">
					In this step, we'll ask you which type of property you have and if guests will book the entire place
					or just a room. Then let us know the location and how many guests can stay.
				</section>
			</aside>
			<aside className="step-1-right-container">
				<video
					className="step-1-video"
					autoPlay
					crossOrigin="anonymous"
					muted=""
					playsInline=""
					preload="auto">
					<source
						src="https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?v_q=high"
						type="video/mp4"
					/>
				</video>
			</aside>
		</div>
	);
}

export default Step1AboutYourPlace;
