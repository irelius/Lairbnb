import "./CreateSpotStep0.css"

import step1Image from "../../../../assets/create_listing/step_1.png";
import step2Image from "../../../../assets/create_listing/step_2.png";
import step3Image from "../../../../assets/create_listing/step_3.png";

// Create spot page 1
function CreateSpotStep0() {
	return (
		<div className="create-spot-container create-spot-0-container">
			<aside className="create-spot-0-left-container">
				<section className="create-spot-0-left">It's easy to get started on Lairbnb</section>
			</aside>
			<aside className="create-spot-0-right-container">
				<section className="create-spot-0-step-container">
					<aside className="create-spot-0-step-number">1</aside>
					<aside className="create-spot-0-step-text">
						<section className="create-spot-0-step-header">Tell us about your place</section>
						<section className="create-spot-0-step-desc">
							Share some basic info, like where it is and how many guests can stay.
						</section>
					</aside>
					<aside>
						<img src={step1Image} alt="create-new-listing-step-one-image" />
					</aside>
				</section>
				<section className="create-spot-0-separator-line"></section>
				<section className="create-spot-0-step-container">
					<aside className="create-spot-0-step-number">2</aside>
					<aside className="create-spot-0-step-text">
						<section className="create-spot-0-step-header">Make it stand out</section>
						<section className="create-spot-0-step-desc">
							Add 5 or more photos plus a title and description-- we'll help you out.
						</section>
					</aside>
					<aside>
						<img src={step2Image} alt="create-new-listing-step-two-image" />
					</aside>
				</section>
				<section className="create-spot-0-separator-line"></section>
				<section className="create-spot-0-step-container">
					<aside className="create-spot-0-step-number">3</aside>
					<aside className="create-spot-0-step-text">
						<section className="create-spot-0-step-header">Finish up and publish</section>
						<section className="create-spot-0-step-desc">
							Choose a starting price, verify a few details, then publish your listing
						</section>
					</aside>
					<aside>
						<img src={step3Image} alt="create-new-listing-step-three-image" />
					</aside>
				</section>
			</aside>
		</div>
	);
}

export default CreateSpotStep0;
