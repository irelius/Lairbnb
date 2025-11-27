import { useEffect, useState } from "react";
import "./CreateSpotStep1b.css";

// Create spot page 3 - location type
function CreateSpotStep1b({ selected, setSelected, selectCounter, setSelectCounter, setDisableNextButton }) {
	// Helper function to update `selected` state variable
	const updateSelected = (type) => {
		// state the type was before clicking
		const prior = selected[type];

		// if type was `true` before clicking, then user is unselecting option
		if (prior === true) {
			setSelectCounter((prev) => prev - 1);
		}
		// else, user is selecting option
		else {
			setSelectCounter((prev) => prev + 1);
		}

		// update object state variable
		setSelected((prev) => ({ ...prev, [type]: !prior }));
	};

	useEffect(() => {
		// if user has selected 0 types, disable next button
		if (selectCounter === 0) {
			setDisableNextButton(true);
		}
		// otherwise, enable next button
		else {
			setDisableNextButton(false);
		}
	}, [selectCounter]);

	return (
		<div className="create-spot-container create-spot-1b-container">
			<section className="create-spot-type-header">Which of these best describes your place?</section>
			<section className="create-spot-types-container">
				<section
					onClick={() => updateSelected("house")}
					className={`create-spot-type create-spot-type-selected-${selected["house"] === true}`}>
					<i class="fa-solid fa-house" />
					<aside>House</aside>
				</section>
				<section
					onClick={() => updateSelected("apartment")}
					className={`create-spot-type create-spot-type-selected-${selected["apartment"] === true}`}>
					<i class="fa-solid fa-building" />
					<aside>Apartment</aside>
				</section>
				<section
					onClick={() => updateSelected("bed&breakfast")}
					className={`create-spot-type create-spot-type-selected-${selected["bed&breakfast"] === true}`}>
					<i class="fa-solid fa-mug-hot" />
					<aside>Bed & breakfast</aside>
				</section>
				<section
					onClick={() => updateSelected("boat")}
					className={`create-spot-type create-spot-type-selected-${selected["boat"] === true}`}>
					<i class="fa-solid fa-sailboat" />
					<aside>Boat</aside>
				</section>
				<section
					onClick={() => updateSelected("camper/RV")}
					className={`create-spot-type create-spot-type-selected-${selected["camper/RV"] === true}`}>
					<i class="fa-solid fa-caravan" />
					<aside>Camper/RV</aside>
				</section>
				<section
					onClick={() => updateSelected("castle")}
					className={`create-spot-type create-spot-type-selected-${selected["castle"] === true}`}>
					<i class="fa-solid fa-chess-rook" />
					<aside>Castle</aside>
				</section>
				<section
					onClick={() => updateSelected("guesthouse")}
					className={`create-spot-type create-spot-type-selected-${selected["guesthouse"] === true}`}>
					<i class="fa-solid fa-people-roof" />
					<aside>Guesthouse</aside>
				</section>
				<section
					onClick={() => updateSelected("hotel")}
					className={`create-spot-type create-spot-type-selected-${selected["hotel"] === true}`}>
					<i class="fa-solid fa-hotel" />
					<aside>Hotel</aside>
				</section>
				<section
					onClick={() => updateSelected("tent")}
					className={`create-spot-type create-spot-type-selected-${selected["tent"] === true}`}>
					<i class="fa-solid fa-tent" />
					<aside>Tent</aside>
				</section>
			</section>
		</div>
	);
}

export default CreateSpotStep1b;
