import "./CreateSpotPage2.css";

function CreateSpotPage2() {
	return (
		<div className="create-spot-2-container">
			<aside className="create-spot-2-left-container">
				<section className="create-spot-2-step">Step 1</section>
				<section className="create-spot-2-header">Tell us about your place</section>
				<section className="create-spot-2-desc">
					In this step, we'll ask you which type of property you have and if guests will book the entire place
					or just a room. Then let us know the location and how many guests can stay.
				</section>
			</aside>
			<aside className="create-spot-2-right-container">
				<video
					className="create-spot-2-video"
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

export default CreateSpotPage2;
