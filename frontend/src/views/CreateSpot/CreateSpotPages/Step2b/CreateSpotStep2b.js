import { useEffect, useState } from "react";
import "./CreateSpotStep2b.css";

// Create spot page 6 - amenities
function CreateSpotStep2b({ amenities, setAmenities, amenitiesCounter, setAmenitiesCounter }) {
	// Helper function to update `amenities` state variable
	const updateAmenities = (type) => {
		// state the type was before clicking
		const prior = amenities[type];

		// if type was `true` before clicking, then user is unselecting option
		if (prior === true) {
			setAmenitiesCounter((prev) => prev - 1);
		}
		// else, user is selecting option
		else {
			setAmenitiesCounter((prev) => prev + 1);
		}

		// update object state variable
		setAmenities((prev) => ({ ...prev, [type]: !prior }));
	};

	return (
		<div className="create-spot-container create-spot-2b-container">
			<div className="create-spot-2b-section-0">
				<section className="create-spot-2b-header">Tell guests what your place has to offer</section>
				<section className="create-spot-2b-subheader">
					You can add more amenities after you publish your listing.
				</section>
			</div>
			<div className="create-spot-2b-section-container">
				<section className="create-spot-2b-section-header">What about these guest favorites?</section>
				<section className="create-spot-2b-section-amenities">
					<section
						className={`create-spot-amenity create-spot-amenity-selected-${amenities["wifi"] === true}`}
						onClick={() => {
							updateAmenities("wifi");
						}}>
						<i className="fa-solid fa-wifi" />
						<aside>Wifi</aside>
					</section>
					<section
						className={`create-spot-amenity create-spot-amenity-selected-${amenities["tv"] === true}`}
						onClick={() => {
							updateAmenities("tv");
						}}>
						<i className="fa-solid fa-tv" />
						<aside>TV</aside>
					</section>
					<section
						className={`create-spot-amenity create-spot-amenity-selected-${amenities["kitchen"] === true}`}
						onClick={() => {
							updateAmenities("kitchen");
						}}>
						<i className="fa-solid fa-kitchen-set" />
						<aside>Kitchen</aside>
					</section>
					<section
						className={`create-spot-amenity create-spot-amenity-selected-${amenities["washer"] === true}`}
						onClick={() => {
							updateAmenities("washer");
						}}>
						<i className="fa-solid fa-jug-detergent" />
						<aside>Washer</aside>
					</section>
					<section
						className={`create-spot-amenity create-spot-amenity-selected-${
							amenities["freeParking"] === true
						}`}
						onClick={() => {
							updateAmenities("freeParking");
						}}>
						<i className="fa-solid fa-car" />
						<aside>Free parking on premises</aside>
					</section>
					<section
						className={`create-spot-amenity create-spot-amenity-selected-${
							amenities["airConditioning"] === true
						}`}
						onClick={() => {
							updateAmenities("airConditioning");
						}}>
						<i className="fa-solid fa-snowflake" />
						<aside>Air conditioning</aside>
					</section>
				</section>
			</div>
			<div className="create-spot-2b-section-container">
				<section className="create-spot-2b-section-header">Do you have any standout amenities?</section>
				<section className="create-spot-2b-section-amenities">
					<section
						className={`create-spot-amenity create-spot-amenity-selected-${amenities["pool"] === true}`}
						onClick={() => {
							updateAmenities("pool");
						}}>
						<i className="fa-solid fa-water-ladder" />
						<aside>Pool</aside>
					</section>
					<section
						className={`create-spot-amenity create-spot-amenity-selected-${amenities["hotTub"] === true}`}
						onClick={() => {
							updateAmenities("hotTub");
						}}>
						<i className="fa-solid fa-hot-tub-person" />
						<aside>Hot tub</aside>
					</section>
					<section
						className={`create-spot-amenity create-spot-amenity-selected-${amenities["bbqGrill"] === true}`}
						onClick={() => {
							updateAmenities("bbqGrill");
						}}>
						<i className="fa-solid fa-burger" />
						<aside>BBQ grill</aside>
					</section>
					<section
						className={`create-spot-amenity create-spot-amenity-selected-${
							amenities["indoorFireplace"] === true
						}`}
						onClick={() => {
							updateAmenities("indoorFireplace");
						}}>
						<i className="fa-solid fa-fire-burner" />
						<aside>Indoor fireplace</aside>
					</section>
					<section
						className={`create-spot-amenity create-spot-amenity-selected-${
							amenities["exerciseEquipment"] === true
						}`}
						onClick={() => {
							updateAmenities("exerciseEquipment");
						}}>
						<i className="fa-solid fa-dumbbell" />
						<aside>Exercise equipment</aside>
					</section>
					<section
						className={`create-spot-amenity create-spot-amenity-selected-${
							amenities["beachAccess"] === true
						}`}
						onClick={() => {
							updateAmenities("beachAccess");
						}}>
						<i className="fa-solid fa-umbrella-beach" />
						<aside>Beach access</aside>
					</section>
				</section>
			</div>
			<div className="create-spot-2b-section-container">
				<section className="create-spot-2b-section-header">Do you have any of these safety items?</section>
				<section className="create-spot-2b-section-amenities">
					<section
						className={`create-spot-amenity create-spot-amenity-selected-${
							amenities["smokeAlarm"] === true
						}`}
						onClick={() => {
							updateAmenities("smokeAlarm");
						}}>
						<i className="fa-solid fa-smog" />
						<aside>Smoke alarm</aside>
					</section>
					<section
						className={`create-spot-amenity create-spot-amenity-selected-${
							amenities["firstAidKit"] === true
						}`}
						onClick={() => {
							updateAmenities("firstAidKit");
						}}>
						<i className="fa-solid fa-kit-medical" />
						<aside>First aid kit</aside>
					</section>
					<section
						className={`create-spot-amenity create-spot-amenity-selected-${
							amenities["fireExtinguisher"] === true
						}`}
						onClick={() => {
							updateAmenities("fireExtinguisher");
						}}>
						<i className="fa-solid fa-fire-extinguisher" />
						<aside>Fire extinguisher</aside>
					</section>
				</section>
			</div>
		</div>
	);
}

export default CreateSpotStep2b;
