import { useEffect } from "react";
import "./CreateSpotStep1a.css";

// Create spot page 2
function CreateSpotStep1a({setDisableNextButton}) {
    useEffect(() => {
        setDisableNextButton(false)
    }, [])

	return (
		<div className="create-spot-container create-spot-1a-container">
			<aside className="create-spot-1a-left-container">
				<section className="create-spot-1a-step">Step 1</section>
				<section className="create-spot-1a-header">Tell us about your place</section>
				<section className="create-spot-1a-desc">
					In this step, we'll ask you which type of property you have and if guests will book the entire place
					or just a room. Then let us know the location and how many guests can stay.
				</section>
			</aside>
			<aside className="create-spot-1a-right-container">
				<video
					className="create-spot-1a-video"
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

export default CreateSpotStep1a;
