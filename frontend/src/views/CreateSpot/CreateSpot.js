import "./CreateSpot.css";
import { useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addSpotThunk } from "../../store/spot";

import { ModeContext } from "../../context/Mode/Mode";

import SubmitButton from "../../components/Modals/SubmitButton/SubmitButton";
import CreateSpotPage1 from "./CreateSpotPages/Page1/CreateSpotPage1";
import CreateSpotPage2 from "./CreateSpotPages/Page2/CreateSpotPage2";
import CreateSpotPage3 from "./CreateSpotPages/Page3/CreateSpotPage3";

function CreateSpot() {
	const dispatch = useDispatch();

	const { setMode } = useContext(ModeContext);

	const history = useHistory();
	const currentUser = useSelector((state) => state.user.user);

	// If user isn't logged in, redirect back to home
	if (!currentUser) {
		history.push("/");
	}

	// Which page of the listing creation process
	const [page, setPage] = useState(1);

	useEffect(() => {
		setMode("host");
		console.log("booba", page);
	}, [page]);

	return (
		<div className="create-spot-main-container">
			{/* Depending on page #, display different page components */}
			{page === 1 ? <CreateSpotPage1 /> : page === 2 ? <CreateSpotPage2 /> : <CreateSpotPage3 />}

			{/* If on first page, display solid footer bar */}
			{page === 1 ? (
				<div className="create-spot-footer-bar"></div>
			) : (
				// If on other pages, display sectioned footer bar
				<div className="create-spot-footer-section-container">
					<section className={`create-spot-footer-section-${page >= 1}`}></section>
					<section className={`create-spot-footer-section-${page >= 2}`}></section>
					<section className={`create-spot-footer-section-${page >= 3}`}></section>
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
							<section className="create-spot-next-button mouse-pointer">
								<button onClick={() => setPage((prev) => prev + 1)}>Next</button>
							</section>
						)}
					</aside>
				</div>
			</div>
		</div>
	);

	return page === 1 ? (
		<div>
			<CreateSpotPage1 setPage={setPage} />
			<div className="create-spot-footer-container">
				<section className="create-spot-footer-bar"> </section>
				<section
					className="create-spot-get-started-button mouse-pointer"
					onClick={() => {
						setPage((prev) => prev + 1);
					}}>
					<SubmitButton buttonText="Get Started" />
				</section>
			</div>
		</div>
	) : page === 2 ? (
		<div></div>
	) : page === 3 ? (
		<div></div>
	) : (
		<>Oops error</>
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
