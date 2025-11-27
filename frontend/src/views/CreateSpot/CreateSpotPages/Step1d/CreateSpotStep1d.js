import { useEffect } from "react";
import "./CreateSpotStep1d.css";

// Create spot page 4 - enter number of rooms
function CreateSpotStep1d({ rooms, setRooms }) {
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
		<div className="create-spot-container create-spot-1d-container">
			<section className="create-spot-rooms-header-container">
				<section className="create-spot-rooms-header">Share some basics about your place</section>
				<section className="create-spot-rooms-subheader">
					You'll add more details later, like bed types.
				</section>
			</section>
			<section className="create-spot-rooms-container">
				<section className="create-spot-rooms-counter-container">
					<aside className="create-spot-rooms-counter-header">Guests</aside>
					<aside className="create-spot-rooms-button-container">
						<button
							disabled={rooms["guests"] <= 1}
							onClick={() => {
								updateRooms("guests", "minus");
							}}
							className={`create-spot-rooms-button create-spot-rooms-button-disabled-${
								rooms["guests"] <= 1
							} mouse-pointer`}>
							<i className="fa-solid fa-minus" />
						</button>
						<aside className="create-spot-rooms-counter-val">{rooms["guests"]}</aside>
						<button
							onClick={() => {
								updateRooms("guests", "plus");
							}}
							className={`create-spot-rooms-button mouse-pointer`}>
							<i className="fa-solid fa-plus" />
						</button>
					</aside>
				</section>
				<div className="create-spot-rooms-space-line"></div>
				<section className="create-spot-rooms-counter-container">
					<aside className="create-spot-rooms-counter-header">Bedrooms</aside>
					<aside className="create-spot-rooms-button-container">
						<button
							disabled={rooms["bedrooms"] <= 0}
							onClick={() => {
								updateRooms("bedrooms", "minus");
							}}
							className={`create-spot-rooms-button create-spot-rooms-button-disabled-${
								rooms["bedrooms"] <= 0
							} mouse-pointer`}>
							<i className="fa-solid fa-minus" />
						</button>

						<aside className="create-spot-rooms-counter-val">{rooms["bedrooms"]}</aside>
						<button
							onClick={() => {
								updateRooms("bedrooms", "plus");
							}}
							className={`create-spot-rooms-button mouse-pointer`}>
							<i className="fa-solid fa-plus" />
						</button>
					</aside>
				</section>
				<div className="create-spot-rooms-space-line"></div>
				<section className="create-spot-rooms-counter-container">
					<aside className="create-spot-rooms-counter-header">Beds</aside>
					<aside className="create-spot-rooms-button-container">
						<button
							disabled={rooms["beds"] <= 1}
							onClick={() => {
								updateRooms("beds", "minus");
							}}
							className={`create-spot-rooms-button create-spot-rooms-button-disabled-${
								rooms["beds"] <= 1
							} mouse-pointer`}>
							<i className="fa-solid fa-minus" />
						</button>

						<aside className="create-spot-rooms-counter-val">{rooms["beds"]}</aside>
						<button
							onClick={() => {
								updateRooms("beds", "plus");
							}}
							className={`create-spot-rooms-button mouse-pointer`}>
							<i className="fa-solid fa-plus" />
						</button>
					</aside>
				</section>
				<div className="create-spot-rooms-space-line"></div>
				<section className="create-spot-rooms-counter-container">
					<aside className="create-spot-rooms-counter-header">Bathrooms</aside>
					<aside className="create-spot-rooms-button-container">
						<button
							disabled={rooms["bathrooms"] <= 0.5}
							onClick={() => {
								updateRooms("bathrooms", "minus");
							}}
							className={`create-spot-rooms-button create-spot-rooms-button-disabled-${
								rooms["bathrooms"] <= 0.5
							} mouse-pointer`}>
							<i className="fa-solid fa-minus" />
						</button>

						<aside className="create-spot-rooms-counter-val">{rooms["bathrooms"]}</aside>
						<button
							onClick={() => {
								updateRooms("bathrooms", "plus");
							}}
							className={`create-spot-rooms-button mouse-pointer`}>
							<i className="fa-solid fa-plus" />
						</button>
					</aside>
				</section>
			</section>
		</div>
	);
}

export default CreateSpotStep1d;
