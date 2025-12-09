import { useEffect } from "react";
import "./Step3Location.css";

// address page (could implement google maps api)
// Create spot step 3 - address
function Step3Location({ setDisableNextButton }) {
	useEffect(() => {
		setDisableNextButton(false);
	}, []);

	return <div className="create-spot-container step-3-container">enter address step</div>;
}

export default Step3Location;
