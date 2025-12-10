import "./CreateSpot.css";
import { useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";

// import { addSpotThunk } from "../../store/spot";

import { ModeContext } from "../../context/Mode/Mode";

import SubmitButton from "../../components/Modals/SubmitButton/SubmitButton";
import Step0GetStarted from "./CreateSpotPages/Step0GetStarted/Step0GetStarted";
import Step1AboutYourPlace from "./CreateSpotPages/Step1AboutYourPlace/Step1AboutYourPlace";
import Step2Structure from "./CreateSpotPages/Step2Structure/Step2Structure";
import Step3Location from "./CreateSpotPages/Step3Location/Step3Location";
import Step4FloorPlan from "./CreateSpotPages/Step4FloorPlan/Step4FloorPlan";
import Step5StandOut from "./CreateSpotPages/Step5StandOut/Step5StandOut";
import Step6Amenities from "./CreateSpotPages/Step6Amenities/Step6Amenities";
import Step7Photos from "./CreateSpotPages/Step7Photos/Step7Photos";

function CreateSpot() {
	// const dispatch = useDispatch();

	const { mode, setMode } = useContext(ModeContext);
	const history = useHistory();

	const stepEndpoints = [
		"overview",
		"about-your-place",
		"structure",
		"location",
		"floor-plan",
		"stand-out",
		"amenities",
		"photos",
		"title",
		"description",
		"finish-setup",
		"price",
		"weekend-price",
	];

	// If user isn't logged in, redirect back to home
	const currentUser = useSelector((state) => state.user.user);
	if (!currentUser) {
		history.push("/");
	}

	// make sure the global variable is set to "host" (controls which type of header to show)
	useEffect(() => {
		if (mode !== "host") setMode("host");
	}, [mode]);

	// Which step of the listing creation process user is currently on
	const [step, setStep] = useState(0);

	useEffect(() => {
		// current page url, split by "/"
		const hrefArr = window.location.href.split("/");

		// endpoint of the current step (ex: "overview", "floor-plan", etc.)
		const currStep = hrefArr[hrefArr.length - 1];

		// set `step` to be the step # (index of `stepEndpoints` array) on page load
		//      Shows the correct footer incase user goes to a url directly
		setStep(stepEndpoints.indexOf(currStep));
	}, []);

	const navigateToNextPage = (dir) => {
		const spotId = 1;

		if (dir === "prev") {
			setStep((prev) => prev - 1);
			history.goBack();
		} else {
			setStep((prev) => prev + 1);
			const nextStep = stepEndpoints[step + 1];
			history.push(`/become-a-host/${spotId}/${nextStep}`);
		}
	};

	const [disableNextButton, setDisableNextButton] = useState(false);

	return (
		<div className="create-spot-main-container">
			<Switch>
				<Route path="/become-a-host/overview">
					<Step0GetStarted />
				</Route>
				<Route path="/become-a-host/:spotId/overview">
					<Step0GetStarted />
				</Route>
				<Route path="/become-a-host/:spotId/about-your-place">
					<Step1AboutYourPlace setDisableNextButton={setDisableNextButton} />
				</Route>
				<Route path="/become-a-host/:spotId/structure">
					<Step2Structure setDisableNextButton={setDisableNextButton} />
				</Route>
				<Route path="/become-a-host/:spotId/location">
					<Step3Location setDisableNextButton={setDisableNextButton} />
				</Route>
				<Route path="/become-a-host/:spotId/floor-plan">
					<Step4FloorPlan />
				</Route>
				<Route path="/become-a-host/:spotId/stand-out">
					<Step5StandOut setDisableNextButton={setDisableNextButton} />
				</Route>
				<Route path="/become-a-host/:spotId/amenities">
					<Step6Amenities />
				</Route>
				<Route path="/become-a-host/:spotId/photos">
					<Step7Photos />
				</Route>
				{/* <Route path="/become-a-host/title">
                    < />
                </Route>
                <Route path="/become-a-host/description">
                    < />
                </Route>
                <Route path="/become-a-host/finish-setup">
                    < />
                </Route>
                <Route path="/become-a-host/price">
                    < />
                </Route>
                <Route path="/become-a-host/weekend-price">
                    < />
                </Route> */}
			</Switch>

			{/* If on first step, display solid footer bar */}
			{step === 0 ? (
				<div className="create-spot-footer-bar"></div>
			) : (
				// If on other steps, display sectioned footer bar
				<div className="create-spot-footer-section-container">
					<section className="create-spot-footer-step-container">
						{/* <section className="test"></section> */}
						<aside className={`create-spot-footer-section-${step >= 3}`}></aside>
						<aside className={`create-spot-footer-section-${step >= 4}`}></aside>
						<aside className={`create-spot-footer-section-${step >= 5}`}></aside>
					</section>
					<section className="create-spot-footer-step-container">
						<aside className={`create-spot-footer-section-${step >= 7}`}></aside>
						<aside className={`create-spot-footer-section-${step >= 8}`}></aside>
						<aside className={`create-spot-footer-section-${step >= 9}`}></aside>
						<aside className={`create-spot-footer-section-${step >= 10}`}></aside>
					</section>
					<section className="create-spot-footer-step-container">
						<aside className={`create-spot-footer-section-${step >= 11}`}></aside>
						<aside className={`create-spot-footer-section-${step >= 12}`}></aside>
					</section>
				</div>
			)}

			{/* Depending on step #, display different footer buttons */}
			<div className="create-spot-footer-container">
				<div className="create-spot-footer-buttons-container">
					<aside className="create-spot-footer-buttons-left">
						{step === 0 ? (
							<></>
						) : (
							<section
								className="create-spot-footer-back-button mouse-pointer"
								onClick={() => navigateToNextPage("prev")}>
								Back
							</section>
						)}
					</aside>
					<aside className="create-spot-footer-buttons-right" onClick={() => navigateToNextPage("next")}>
						{step === 0 ? (
							<section className="create-spot-get-started-button mouse-pointer">
								<SubmitButton buttonText="Get Started" />
							</section>
						) : (
							<button
								className={`create-spot-next-button ${disableNextButton ? "" : "mouse-pointer"}`}
								disabled={disableNextButton}>
								Next
							</button>
						)}
					</aside>
				</div>
			</div>
		</div>
	);

	// const [address, setAddress] = useState("");
	// const [city, setCity] = useState("");
	// const [state, setState] = useState("");
	// const [country, setCountry] = useState("");
	// const [lat, setLat] = useState("");
	// const [lng, setLng] = useState("");
	// const [name, setName] = useState("");
	// const [description, setDescription] = useState("");
	// const [price, setPrice] = useState("");
	// const [image, setImage] = useState("");

	// const handleSubmit = (e) => {
	//     e.preventDefault();
	//     const newSpot = {
	//         address,
	//         city,
	//         state,
	//         country,
	//         lat,
	//         lng,
	//         name,
	//         description,
	//         price,
	//         image
	//     }
	//     dispatch(addSpotThunk(newSpot))
	//     history.push("/")
	// }

	// return (
	//     <div className="create-spot-main">

	//         {/* <aside className="left">
	//             <h1 className="left-header">
	//                 What kind of place will you host?
	//             </h1>
	//         </aside> */}

	//         {/* <aside className="right bg-white">
	//             <div className="back-button-container">
	//                 <NavLink exact to="/">
	//                     <div className="back-button border-none">
	//                         Exit
	//                     </div>
	//                 </NavLink>
	//             </div>
	//             <div className="right-section">
	//                 <form onSubmit={handleSubmit} className="create-spot-form">
	//                     <input
	//                         type="text"
	//                         placeholder="Address"
	//                         required
	//                         value={address}
	//                         onChange={(e) => setAddress(e.target.value)}
	//                     />
	//                     <input
	//                         type="text"
	//                         placeholder="City"
	//                         required
	//                         value={city}
	//                         onChange={(e) => setCity(e.target.value)}
	//                     />
	//                     <input
	//                         type="text"
	//                         placeholder="State"
	//                         required
	//                         value={state}
	//                         onChange={(e) => setState(e.target.value)}
	//                     />
	//                     <input
	//                         type="text"
	//                         placeholder="Country"
	//                         required
	//                         value={country}
	//                         onChange={(e) => setCountry(e.target.value)}
	//                     />
	//                     <input
	//                         type="number"
	//                         placeholder="Latitude"
	//                         required
	//                         min="-90"
	//                         max="90"
	//                         value={lat}
	//                         onChange={(e) => setLat(e.target.value)}
	//                     />
	//                     <input
	//                         type="number"
	//                         placeholder="Longitude"
	//                         required
	//                         min="-180"
	//                         max="180"
	//                         value={lng}
	//                         onChange={(e) => setLng(e.target.value)}
	//                     />
	//                     <input
	//                         type="text"
	//                         placeholder="Location Name"
	//                         required
	//                         value={name}
	//                         onChange={(e) => setName(e.target.value)}
	//                     />
	//                     <input
	//                         type="text"
	//                         placeholder="Description"
	//                         required
	//                         value={description}
	//                         onChange={(e) => setDescription(e.target.value)}
	//                     />
	//                     <input
	//                         type="number"
	//                         placeholder="Price"
	//                         required
	//                         value={price}
	//                         onChange={(e) => setPrice(e.target.value)}
	//                     />
	//                     <input
	//                         type="text"
	//                         placeholder="Spot Image URL"
	//                         required
	//                         value={image}
	//                         onChange={(e) => setImage(e.target.value)}
	//                     />
	//                     <div className="submit-button-div">
	//                         <button type="submit" className="submit-button font-bold border-none">
	//                             Host Your Spot
	//                         </button>
	//                     </div>

	//                 </form>
	//             </div>
	//         </aside> */}
	//     </div>
	// )
}

export default CreateSpot;
