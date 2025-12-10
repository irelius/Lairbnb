import "./Step7Photos.css";

import { useState, useEffect } from "react";

import uploadPhoto from "../../../../assets/create_listing/upload_photo.png";
import UploadPhotoForm from "../../../../components/Modals/UploadPhotoModal/UploadPhotoForm";

// Create spot page 7 - add photos
function Step7Photos() {
	const [showPhotos, setShowPhotos] = useState(false);
	const [images, setImages] = useState([]);

	useEffect(() => {
		console.log("test", images);
	}, [images]);

    // temporarily set `structure` to "house". Update after implementing thunk to fetch current listing from db
	const structure = "house";

	return (
		<div className="create-spot-container step-7-container">
			<section className="step-7-header-container">
				<section className="step-7-header">Add some photos of your {structure.toLowerCase()}</section>
				<section className="step-7-subheader">
					You'll need 5 photos to get started. You can add more or make changes later.
				</section>
			</section>
			<section className="step-7-photos-container">
				<img className="step-7-photos-image-holder" src={uploadPhoto} alt="upload-photos-of-new-listing" />
				<button onClick={() => setShowPhotos(true)} className="step-7-photos-button mouse-pointer">
					Add photos
				</button>
			</section>
			{showPhotos ? (
				<div
					className="modal"
					onClick={(e) => {
						e.preventDefault();
						setShowPhotos(false);
					}}>
					<UploadPhotoForm setShowPhotos={setShowPhotos} images={images} setImages={setImages} />
				</div>
			) : (
				<></>
			)}
		</div>
	);
}

export default Step7Photos;
