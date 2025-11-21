import "./CreateSpot.css";
import { NavLink, useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSpotThunk } from "../../store/spot";

import step1Image from "../../assets/create_listing/step_1.png";
import step2Image from "../../assets/create_listing/step_2.png";
import step3Image from "../../assets/create_listing/step_3.png";
import SubmitButton from "../../components/Modals/SubmitButton/SubmitButton";

function CreateSpot() {
	const dispatch = useDispatch();

	const history = useHistory();
	const currentUser = useSelector((state) => state.user.user);

	// Which page of the listing creation process

	const [page, setPage] = useState(1);

	if (!currentUser) {
		history.push("/");
	}

	return page === 1 ? (
		<div>
			<div className="create-spot-container">
				<aside className="create-spot-left-container">
					<section className="create-spot-left">It's easy to get started on Lairbnb</section>
				</aside>
				<aside className="create-spot-right-container">
					<section className="create-spot-step-container">
						<aside className="create-spot-step-number">1</aside>
						<aside className="create-spot-step-text">
							<section className="create-spot-step-header">Tell us about your place</section>
							<section className="create-spot-step-desc">
								Share some basic info, like where it is and how many guests can stay.
							</section>
						</aside>
						<aside>
							<img src={step1Image} />
						</aside>
					</section>
					<section className="create-spot-separator-line"></section>
					<section className="create-spot-step-container">
						<aside className="create-spot-step-number">2</aside>
						<aside className="create-spot-step-text">
							<section className="create-spot-step-header">Make it stand out</section>
							<section className="create-spot-step-desc">
								Add 5 or more photos plus a title and description-- we'll help you out.
							</section>
						</aside>
						<aside>
							<img src={step2Image} />
						</aside>
					</section>
					<section className="create-spot-separator-line"></section>
					<section className="create-spot-step-container">
						<aside className="create-spot-step-number">3</aside>
						<aside className="create-spot-step-text">
							<section className="create-spot-step-header">Finish up and publish</section>
							<section className="create-spot-step-desc">
								Choose a starting price, verify a few details, then publish your listing
							</section>
						</aside>
						<aside>
							<img src={step3Image} />
						</aside>
					</section>
				</aside>
			</div>
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
