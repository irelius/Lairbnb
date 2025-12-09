import { useEffect } from "react";
import "./Step5StandOut.css";

// Create spot step 5 - intro 2
function Step5StandOut({ setDisableNextButton }) {
	useEffect(() => {
		setDisableNextButton(false);
	}, []);

	return (
		<div className="create-spot-container step-5-container">
			<aside className="step-5-left-container">
				<section className="step-5-step">Step 2</section>
				<section className="step-5-header">Make your place stand out</section>
				<section className="step-5-desc">
					In this step, you’ll add some of the amenities your place offers, plus 5 or more photos. Then,
					you’ll create a title and description.
				</section>
			</aside>
			<aside className="step-5-right-container">
				<video
					className="step-5-video"
					autoPlay=""
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

export default Step5StandOut;
