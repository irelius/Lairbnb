import { useEffect } from "react";
import "./CreateSpotStep2a.css";

// Create spot page 5
function CreateSpotStep2a({ setDisableNextButton }) {
	useEffect(() => {
		setDisableNextButton(false);
	}, []);

	return (
		<div className="create-spot-container create-spot-2a-container">
			<aside className="create-spot-2a-left-container">
				<section className="create-spot-2a-step">Step 2</section>
				<section className="create-spot-2a-header">Make your place stand out</section>
				<section className="create-spot-2a-desc">
					In this step, you’ll add some of the amenities your place offers, plus 5 or more photos. Then,
					you’ll create a title and description.
				</section>
			</aside>
			<aside className="create-spot-2a-right-container">
				<video
					className="create-spot-2a-video"
					autoplay=""
					crossorigin="anonymous"
					muted=""
					playsinline=""
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

export default CreateSpotStep2a;
