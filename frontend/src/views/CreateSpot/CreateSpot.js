import "./CreateSpot.css";
import { useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addSpotThunk } from "../../store/spot";

import { ModeContext } from "../../context/Mode/Mode";

import SubmitButton from "../../components/Modals/SubmitButton/SubmitButton";
import CreateSpotStep0 from "./CreateSpotPages/Step0/CreateSpotStep0";
import CreateSpotStep1a from "./CreateSpotPages/Step1a/CreateSpotStep1a";
import CreateSpotStep1b from "./CreateSpotPages/Step1b/CreateSpotStep1b";
import CreateSpotStep1c from "./CreateSpotPages/Step1c/CreateSpotStep1c";
import CreateSpotStep2a from "./CreateSpotPages/Step2a/CreateSpotStep2a";
import CreateSpotStep2b from "./CreateSpotPages/Step2b/CreateSpotStep2b";
import CreateSpotStep1d from "./CreateSpotPages/Step1d/CreateSpotStep1d";
import CreateSpotStep2c from "./CreateSpotPages/Step2c/CreateSpotStep2c";

function CreateSpot() {
	const dispatch = useDispatch();

	const { setMode } = useContext(ModeContext);

	const history = useHistory();
	const currentUser = useSelector((state) => state.user.user);

	// If user isn't logged in, redirect back to home
	if (!currentUser) {
		history.push("/");
	}

	// make sure the global variable is set to "host" (controls which type of header to show)
	useEffect(() => {
		setMode("host");
	}, []);

	// Which page of the listing creation process
	const [page, setPage] = useState(8);

	const [disableNextButton, setDisableNextButton] = useState(false);

	// what type of place is this new listing?
	const [type, setType] = useState(null);

	// number of rooms of listing
	const [rooms, setRooms] = useState({
		guests: 2,
		bedrooms: 0,
		beds: 1,
		bathrooms: 1,
	});

	// what amenities is provided
	const [amenitiesCounter, setAmenitiesCounter] = useState(0);
	const [amenities, setAmenities] = useState({
		// section 1 - guest favorites
		wifi: false,
		tv: false,
		kitchen: false,
		washer: false,
		freeParking: false,
		airConditioning: false,
		// section 2 - standout amenities
		pool: false,
		hotTub: false,
		bbqGrill: false,
		indoorFireplace: false,
		exerciseEquipment: false,
		beachAccess: false,
		// section 3 - safety items
		smokeAlarm: false,
		firstAidKit: false,
		fireExtinguisher: false,
	});

	return (
		<div className="create-spot-main-container">
			{/* Depending on page #, display different page components */}
			{page === 1 ? (
				// get started page
				<CreateSpotStep0 />
			) : page === 2 ? (
				// step 1 intro
				<CreateSpotStep1a setDisableNextButton={setDisableNextButton} />
			) : page === 3 ? (
				// select listing type
				<CreateSpotStep1b type={type} setType={setType} setDisableNextButton={setDisableNextButton} />
			) : page === 4 ? (
				// enter address
				<CreateSpotStep1c setDisableNextButton={setDisableNextButton} />
			) : page === 5 ? (
				// enter # of rooms
				<CreateSpotStep1d rooms={rooms} setRooms={setRooms} />
			) : page === 6 ? (
				// step 2 intro
				<CreateSpotStep2a setDisableNextButton={setDisableNextButton} />
			) : page === 7 ? (
				// select amenities
				<CreateSpotStep2b
					amenities={amenities}
					amenitiesCounter={amenitiesCounter}
					setAmenities={setAmenities}
					setAmenitiesCounter={setAmenitiesCounter}
				/>
			) : page === 8 ? (
                // upload images for listing
				<CreateSpotStep2c type={type} />
			) : (
				<>create new page</>
			)}

			{/* If on first page, display solid footer bar */}
			{page === 1 ? (
				<div className="create-spot-footer-bar"></div>
			) : (
				// If on other pages, display sectioned footer bar
				<div className="create-spot-footer-section-container">
					<section className="create-spot-footer-step-container">
						{/* <section className="test"></section> */}
						<aside className={`create-spot-footer-section-${page >= 3}`}></aside>
						<aside className={`create-spot-footer-section-${page >= 4}`}></aside>
						<aside className={`create-spot-footer-section-${page >= 5}`}></aside>
					</section>
					<section className="create-spot-footer-step-container">
						<aside className={`create-spot-footer-section-${page >= 7}`}></aside>
						<aside className={`create-spot-footer-section-${page >= 8}`}></aside>
						<aside className={`create-spot-footer-section-${page >= 9}`}></aside>
					</section>
					<section className="create-spot-footer-step-container">
						<aside className={`create-spot-footer-section-${page >= 10}`}></aside>
						<aside className={`create-spot-footer-section-${page >= 11}`}></aside>
						<aside className={`create-spot-footer-section-${page >= 12}`}></aside>
					</section>
				</div>
			)}

			{/* Depending on page #, display different footer buttons */}
			<div className="create-spot-footer-container">
				<div className="create-spot-footer-buttons-container">
					<aside className="create-spot-footer-buttons-left">
						{page === 1 ? (
							<></>
						) : (
							<section
								className="create-spot-footer-back-button mouse-pointer"
								onClick={() => {
									setPage((prev) => prev - 1);
								}}>
								Back
							</section>
						)}
					</aside>
					<aside className="create-spot-footer-buttons-right">
						{page === 1 ? (
							<section
								className="create-spot-get-started-button mouse-pointer"
								onClick={() => {
									setPage((prev) => prev + 1);
								}}>
								<SubmitButton buttonText="Get Started" />
							</section>
						) : (
							<button
								className={`create-spot-next-button ${disableNextButton ? "" : "mouse-pointer"}`}
								onClick={() => setPage((prev) => prev + 1)}
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
