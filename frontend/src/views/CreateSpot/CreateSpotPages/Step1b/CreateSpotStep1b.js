import { useEffect, useState } from "react";
import "./CreateSpotStep1b.css";

// Create spot page 3 - location type
function CreateSpotStep1b({ type, setType, setDisableNextButton }) {
	// Helper function to update `selected` state variable
	const updateSelected = (selection) => {
		if (type === selection) {
			setType(null);
		} else {
			setType(selection);
		}
	};

	useEffect(() => {
		// if user has selected 0 types, disable next button
		if (type === null) {
			setDisableNextButton(true);
		}
		// otherwise, enable next button
		else {
			setDisableNextButton(false);
		}
	}, [type]);

	return (
		<div className="create-spot-container create-spot-1b-container">
			<section className="create-spot-type-header">Which of these best describes your place?</section>
			<section className="create-spot-types-container">
				<section
					onClick={() => updateSelected("house")}
					className={`create-spot-type create-spot-type-selected-${"house" === type}`}>
					<i class="fa-solid fa-house" />
					<aside>House</aside>
				</section>
				<section
					onClick={() => updateSelected("apartment")}
					className={`create-spot-type create-spot-type-selected-${"apartment" === type}`}>
					<i class="fa-solid fa-building" />
					<aside>Apartment</aside>
				</section>
				<section
					onClick={() => updateSelected("bed&breakfast")}
					className={`create-spot-type create-spot-type-selected-${"bed&breakfast" === type}`}>
					<i class="fa-solid fa-mug-hot" />
					<aside>Bed & breakfast</aside>
				</section>
				<section
					onClick={() => updateSelected("boat")}
					className={`create-spot-type create-spot-type-selected-${"boat" === type}`}>
					<i class="fa-solid fa-sailboat" />
					<aside>Boat</aside>
				</section>
				<section
					onClick={() => updateSelected("camper/RV")}
					className={`create-spot-type create-spot-type-selected-${"camper/RV" === type}`}>
					<i class="fa-solid fa-caravan" />
					<aside>Camper/RV</aside>
				</section>
				<section
					onClick={() => updateSelected("castle")}
					className={`create-spot-type create-spot-type-selected-${"castle" === type}`}>
					<i class="fa-solid fa-chess-rook" />
					<aside>Castle</aside>
				</section>
				<section
					onClick={() => updateSelected("guesthouse")}
					className={`create-spot-type create-spot-type-selected-${"guesthouse" === type}`}>
					<i class="fa-solid fa-people-roof" />
					<aside>Guesthouse</aside>
				</section>
				<section
					onClick={() => updateSelected("hotel")}
					className={`create-spot-type create-spot-type-selected-${"hotel" === type}`}>
					<i class="fa-solid fa-hotel" />
					<aside>Hotel</aside>
				</section>
				<section
					onClick={() => updateSelected("tent")}
					className={`create-spot-type create-spot-type-selected-${"tent" === type}`}>
					<i class="fa-solid fa-tent" />
					<aside>Tent</aside>
				</section>
			</section>
		</div>
	);
}

export default CreateSpotStep1b;
