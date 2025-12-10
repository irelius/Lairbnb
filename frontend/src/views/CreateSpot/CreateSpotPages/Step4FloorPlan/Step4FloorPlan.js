import "./Step4FloorPlan.css";

import { useState } from "react";

// Create spot step 4 - enter number of rooms
function Step4FloorPlan() {
	// number of rooms of listing
	const [rooms, setRooms] = useState({
		guests: 2,
		bedrooms: 0,
		beds: 1,
		bathrooms: 1,
	});

	const updateRooms = (room, direction) => {
		const prevCount = rooms[room];

		if (direction === "plus") {
			if (room === "bathrooms") {
				setRooms((prev) => ({ ...prev, [room]: prevCount + 0.5 }));
			} else {
				setRooms((prev) => ({ ...prev, [room]: prevCount + 1 }));
			}
		} else {
			if (room === "bathrooms") {
				setRooms((prev) => ({ ...prev, [room]: prevCount - 0.5 }));
			} else {
				setRooms((prev) => ({ ...prev, [room]: prevCount - 1 }));
			}
		}
	};

	return (
		<div className="create-spot-container step-4-container">
			<section className="step-4-header-container">
				<section className="step-4-header">Share some basics about your place</section>
				<section className="step-4-subheader">You'll add more details later, like bed types.</section>
			</section>
			<section className="step-4-container">
				<section className="step-4-counter-container">
					<aside className="step-4-counter-header">Guests</aside>
					<aside className="step-4-button-container">
						<button
							disabled={rooms["guests"] <= 1}
							onClick={() => {
								updateRooms("guests", "minus");
							}}
							className={`step-4-button step-4-button-disabled-${rooms["guests"] <= 1} mouse-pointer`}>
							<i className="fa-solid fa-minus" />
						</button>
						<aside className="step-4-counter-val">{rooms["guests"]}</aside>
						<button
							onClick={() => {
								updateRooms("guests", "plus");
							}}
							className={`step-4-button mouse-pointer`}>
							<i className="fa-solid fa-plus" />
						</button>
					</aside>
				</section>
				<div className="step-4-space-line"></div>
				<section className="step-4-counter-container">
					<aside className="step-4-counter-header">Bedrooms</aside>
					<aside className="step-4-button-container">
						<button
							disabled={rooms["bedrooms"] <= 0}
							onClick={() => {
								updateRooms("bedrooms", "minus");
							}}
							className={`step-4-button step-4-button-disabled-${rooms["bedrooms"] <= 0} mouse-pointer`}>
							<i className="fa-solid fa-minus" />
						</button>

						<aside className="step-4-counter-val">{rooms["bedrooms"]}</aside>
						<button
							onClick={() => {
								updateRooms("bedrooms", "plus");
							}}
							className={`step-4-button mouse-pointer`}>
							<i className="fa-solid fa-plus" />
						</button>
					</aside>
				</section>
				<div className="step-4-space-line"></div>
				<section className="step-4-counter-container">
					<aside className="step-4-counter-header">Beds</aside>
					<aside className="step-4-button-container">
						<button
							disabled={rooms["beds"] <= 1}
							onClick={() => {
								updateRooms("beds", "minus");
							}}
							className={`step-4-button step-4-button-disabled-${rooms["beds"] <= 1} mouse-pointer`}>
							<i className="fa-solid fa-minus" />
						</button>

						<aside className="step-4-counter-val">{rooms["beds"]}</aside>
						<button
							onClick={() => {
								updateRooms("beds", "plus");
							}}
							className={`step-4-button mouse-pointer`}>
							<i className="fa-solid fa-plus" />
						</button>
					</aside>
				</section>
				<div className="step-4-space-line"></div>
				<section className="step-4-counter-container">
					<aside className="step-4-counter-header">Bathrooms</aside>
					<aside className="step-4-button-container">
						<button
							disabled={rooms["bathrooms"] <= 0.5}
							onClick={() => {
								updateRooms("bathrooms", "minus");
							}}
							className={`step-4-button step-4-button-disabled-${
								rooms["bathrooms"] <= 0.5
							} mouse-pointer`}>
							<i className="fa-solid fa-minus" />
						</button>

						<aside className="step-4-counter-val">{rooms["bathrooms"]}</aside>
						<button
							onClick={() => {
								updateRooms("bathrooms", "plus");
							}}
							className={`step-4-button mouse-pointer`}>
							<i className="fa-solid fa-plus" />
						</button>
					</aside>
				</section>
			</section>
		</div>
	);
}

export default Step4FloorPlan;
