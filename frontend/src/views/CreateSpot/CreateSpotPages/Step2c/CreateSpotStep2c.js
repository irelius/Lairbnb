import "./CreateSpotStep2c.css";

import { useState } from "react";

import uploadPhoto from "../../../../assets/create_listing/upload_photo.png";
import UploadPhotoForm from "../../../../components/Modals/UploadPhotoModal/UploadPhotoForm";

// Create spot page 8 - step 2 add photos
function CreateSpotStep2c({ type }) {
	const [showPhotos, setShowPhotos] = useState(false);

	return (
		<div className="create-spot-container create-spot-2c-container">
			<section className="create-spot-photos-header-container">
				<section className="create-spot-photos-header">Add some photos of your {type.toLowerCase()}</section>
				<section className="create-spot-photos-subheader">
					You'll need 5 photos to get started. You can add more or make changes later.
				</section>
			</section>
			<section className="create-spot-add-photos-container">
				<img
					className="create-spot-add-photos-image-holder"
					src={uploadPhoto}
					alt="upload-photos-of-new-listing"
				/>
				<button onClick={() => setShowPhotos(true)} className="create-spot-add-photos-button mouse-pointer">
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
					<UploadPhotoForm setShowPhotos={setShowPhotos}/>
				</div>
			) : (
				<></>
			)}
		</div>
	);
}

export default CreateSpotStep2c;
