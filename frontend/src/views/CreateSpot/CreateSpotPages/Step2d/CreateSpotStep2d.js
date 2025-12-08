import "./CreateSpotStep2d.css";

import { useEffect, useState } from "react";

import uploadPhoto from "../../../../assets/create_listing/upload_photo.png";
import UploadPhotoForm from "../../../../components/Modals/UploadPhotoModal/UploadPhotoForm";

// Create spot page 9 - rearrange photos or add more photos
function CreateSpotStep2d() {
	const [showPhotos, setShowPhotos] = useState(false);
    const [images, setImages] = useState([])

	return (
		<div className="create-spot-container create-spot-2d-container">
            <section>
                <aside>
                    <section className="create-spot-rearrange-photo-header">
                        Choose at least 5 photos
                    </section>
                    <section className="create-spot-rearrange-photo-subheader">
                        Drag to reorder
                    </section>
                </aside>
                <aside className="create-spot-rearrange-add-more-button">
                    <i className="fa-solid fa-plus" />
                </aside>
            </section>
            <section className="create-spot-rearrange-photo-container">
                <section className="create-spot-main-cover-photo"></section>

            </section>

        </div>

		// <div className="create-spot-container create-spot-2d-container">
		// 	<section className="create-spot-reorder-photos-header-container">
		// 		<section className="create-spot-reorder-photos-header">
		// 			Add some photos of your {type.toLowerCase()}
		// 		</section>
		// 		<section className="create-spot-reorder-photos-subheader">
		// 			You'll need 5 photos to get started. You can add more or make changes later.
		// 		</section>
		// 	</section>
		// 	<section className="create-spot-add-photos-container">
		// 		<img
		// 			className="create-spot-add-photos-image-holder"
		// 			src={uploadPhoto}
		// 			alt="upload-photos-of-new-listing"
		// 		/>
		// 		<button onClick={() => setShowPhotos(true)} className="create-spot-add-photos-button mouse-pointer">
		// 			Add photos
		// 		</button>
		// 	</section>
		// 	{showPhotos ? (
		// 		<div
		// 			className="modal"
		// 			onClick={(e) => {
		// 				e.preventDefault();
		// 				setShowPhotos(false);
		// 			}}>
		// 			<UploadPhotoForm setShowPhotos={setShowPhotos} />
		// 		</div>
		// 	) : (
		// 		<></>
		// 	)}
		// </div>
	);
}

export default CreateSpotStep2d;
