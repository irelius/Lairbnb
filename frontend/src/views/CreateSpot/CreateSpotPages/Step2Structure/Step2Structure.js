import { useEffect, useState } from "react";
import "./Step2Structure.css";

// Create spot step 2 - location structure
function Step2Structure({ setDisableNextButton }) {
	// what structure of structure is this new listing?
	const [structure, setStructure] = useState(null);

	// Helper function to update `selected` state variable
	const updateSelected = (selection) => {
		if (structure === selection) {
			setStructure(null);
		} else {
			setStructure(selection);
		}
	};

	useEffect(() => {
		// if user has selected 0 structures, disable next button
		if (structure === null) {
			setDisableNextButton(true);
		}
		// otherwise, enable next button
		else {
			setDisableNextButton(false);
		}
	}, [structure]);

	return (
		<div className="create-spot-container create-step-2-container">
			<section className="spot-structure-header">Which of these best describes your place?</section>
			<section className="spot-structures-container">
				<section
					onClick={() => updateSelected("house")}
					className={`spot-structure spot-structure-selected-${"house" === structure}`}>
					<i className="fa-solid fa-house" />
					<aside>House</aside>
				</section>
				<section
					onClick={() => updateSelected("apartment")}
					className={`spot-structure spot-structure-selected-${"apartment" === structure}`}>
					<i className="fa-solid fa-building" />
					<aside>Apartment</aside>
				</section>
				<section
					onClick={() => updateSelected("bed&breakfast")}
					className={`spot-structure spot-structure-selected-${"bed&breakfast" === structure}`}>
					<i className="fa-solid fa-mug-hot" />
					<aside>Bed & breakfast</aside>
				</section>
				<section
					onClick={() => updateSelected("boat")}
					className={`spot-structure spot-structure-selected-${"boat" === structure}`}>
					<i className="fa-solid fa-sailboat" />
					<aside>Boat</aside>
				</section>
				<section
					onClick={() => updateSelected("camper/RV")}
					className={`spot-structure spot-structure-selected-${"camper/RV" === structure}`}>
					<i className="fa-solid fa-caravan" />
					<aside>Camper/RV</aside>
				</section>
				<section
					onClick={() => updateSelected("castle")}
					className={`spot-structure spot-structure-selected-${"castle" === structure}`}>
					<i className="fa-solid fa-chess-rook" />
					<aside>Castle</aside>
				</section>
				<section
					onClick={() => updateSelected("guesthouse")}
					className={`spot-structure spot-structure-selected-${"guesthouse" === structure}`}>
					<i className="fa-solid fa-people-roof" />
					<aside>Guesthouse</aside>
				</section>
				<section
					onClick={() => updateSelected("hotel")}
					className={`spot-structure spot-structure-selected-${"hotel" === structure}`}>
					<i className="fa-solid fa-hotel" />
					<aside>Hotel</aside>
				</section>
				<section
					onClick={() => updateSelected("tent")}
					className={`spot-structure spot-structure-selected-${"tent" === structure}`}>
					<i className="fa-solid fa-tent" />
					<aside>Tent</aside>
				</section>
			</section>
		</div>
	);
}

export default Step2Structure;
