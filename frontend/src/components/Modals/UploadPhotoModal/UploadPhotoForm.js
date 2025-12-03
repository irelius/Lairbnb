import "./UploadPhotoForm.css";

import { useEffect, useState } from "react";

function UploadPhotoForm({ setShowPhotos }) {
	const [images, setImages] = useState([]);
	const [disableUpload, setDisableUpload] = useState(false);

	useEffect(() => {
		if (images.length > 0) {
			setDisableUpload(true);
		}
	}, [images]);

	// helper function to click on the `input` element via DOM manipulation
	const openFileWindow = () => {
		const fileInput = document.getElementById("listing-photo-upload");
		fileInput.click();
	};

	const dropHandler = (e) => {
		e.preventDefault();
		const files = [e.dataTransfer.items];
		setImages(files);
	};


	return (
		<div className="modal-form-container upload-photo-form-main-container" onClick={(e) => e.stopPropagation()}>
			{/* <button onClick={() => setDisableUpload((prev) => !prev)}>temp</button> */}

			{/* Upload Photo Form - corner buttons */}
			<aside className="upload-photo-form-exit-button">
				<i className="fa-solid fa-xmark fa-lg"></i>
			</aside>
			<aside className="upload-photo-form-plus-button">
				<i className="fa-solid fa-plus fa-lg"></i>
			</aside>

			{/* Upload Photo Form - header section */}
			<section className="upload-photo-form-header-container">
				{images.length > 0 ? (
					<input></input>
				) : (
					<section>
						<section className="upload-photo-form-header">Upload photos</section>
						<section className="upload-photo-form-subheader">No items selected</section>
					</section>
				)}
			</section>

			{/* Upload Photo Form - Main section */}
			<section className="upload-photo-form-upload-container">
				<i className="fa-regular fa-images fa-5x"></i>
				<aside className="upload-photo-form-drag-header">Drag and drop</aside>
				<aside className="upload-photo-form-browser-subheader">or browse for photos</aside>
				<button
					className="upload-photo-form-browse-button mouse-pointer"
					onClick={() => {
						openFileWindow();
					}}>
					Browse
				</button>

				{/* input element to upload photos, but set to hidden */}
				<input id="listing-photo-upload" type="file" accept="image/png, image/jpeg, image/jpg" hidden />

				{/* test */}
				{/* <label id="drop-zone">
					asdfasdfasdf
					<input type="file" id="file-input" multiple accept="image/png, image/jpeg, image/jpg" hidden />
				</label> */}
				
			</section>

			{/* Upload Photo Form - footer buttons */}
			<section className="upload-photo-form-footer-container">
				<button className="upload-photo-form-done-button mouse-pointer">Done</button>
				<button
					className={`upload-photo-form-upload-button button-enabled-${disableUpload} mouse-pointer`}
					disabled={disableUpload === false}
					onClick={(e) => {
						setImages([]);
						setShowPhotos(false);
					}}>
					Upload
				</button>
			</section>
		</div>
	);
}

export default UploadPhotoForm;
