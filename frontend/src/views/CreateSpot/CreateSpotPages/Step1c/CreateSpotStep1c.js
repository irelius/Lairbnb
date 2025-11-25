import { useEffect } from "react";
import "./CreateSpotStep1c.css";


// address page (could implement google maps api)
// Create spot page 4
function CreateSpotStep1c({ setDisableNextButton }) {
	useEffect(() => {
		setDisableNextButton(false);
	}, []);

	return (
		<div className="create-spot-container create-spot-1c-container">
			enter address step
		</div>
	);
}

export default CreateSpotStep1c;
