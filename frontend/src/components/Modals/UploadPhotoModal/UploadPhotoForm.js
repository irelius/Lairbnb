import "./UploadPhotoForm.css";

import { useCallback, useEffect, useRef, useState } from "react";

function UploadPhotoForm({ setShowPhotos }) {
	const [images, setImages] = useState([]);
	const [disableUpload, setDisableUpload] = useState(false);
	const [dragAndDropHovered, setDragAndDropHovered] = useState(false);

	useEffect(() => {
		if (images.length > 0) {
			setDisableUpload(true);
		}
	}, [images]);

	const dropRef = useRef(null);

	// helper function. handles drag-and-drop and manual input uploads
	const handleFiles = useCallback((files) => {
		const fileArray = Array.from(files);

		const newImages = fileArray
			.filter((file) => file.type.startsWith("image/"))
			.map((file) => ({
				file,
				url: URL.createObjectURL(file),
			}));

		setImages((prev) => [...prev, ...newImages]);
	}, []);

	// prevent memory leak, clean up object urls
	useEffect(() => {
		return () => {
			images.forEach((img) => URL.revokeObjectURL(img.url));
		};
	}, [images]);

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

			<section
				ref={dropRef}
				onDragOver={(e) => {
					e.preventDefault();
					setDragAndDropHovered(true);
				}}
				onDragLeave={(e) => {
					e.preventDefault();
					setDragAndDropHovered(false);
				}}
				onDrop={(e) => {
					e.preventDefault();
					if (e.dataTransfer.files.length > 0) {
						handleFiles(e.dataTransfer.files);
					}
				}}
				className={`upload-photo-form-upload-container upload-photo-drag-and-drop-${dragAndDropHovered}`}>
				<i className="fa-regular fa-images fa-5x"></i>
				<aside className="upload-photo-form-drag-header">Drag and drop</aside>
				<aside className="upload-photo-form-browser-subheader">or browse for photos</aside>

				<button
					onClick={() => document.getElementById("fileInput").click()}
					className="upload-photo-form-browse-button mouse-pointer">
					Browse
				</button>

				<input
					type="file"
					id="fileInput"
					multiple
					accept="image/png, image/jpeg, image/jpg"
					onChange={(e) => handleFiles(e.target.files)}
					hidden
				/>

				<div>
					{images.map((img, i) => (
						<img key={i} src={img.url} alt={`preview-${i}`} />
					))}
				</div>
			</section>

			{/* Upload Photo Form - Main section */}
			{/* <section className={`upload-photo-form-upload-container upload-photo-drag-and-drop-${dragAndDropHovered}`}>
				<i className="fa-regular fa-images fa-5x"></i>
				<aside className="upload-photo-form-drag-header">Drag and drop</aside>
				<aside className="upload-photo-form-browser-subheader">or browse for photos</aside>

				<button
					ref={dropRef}
					onDragOver={(e) => {
						e.preventDefault();
						setDragAndDropHovered(true);
					}}
					onDragLeave={(e) => {
						e.preventDefault();
						setDragAndDropHovered(false);
					}}
					onDrop={(e) => {
						e.preventDefault();
						if (e.dataTransfer.files.length > 0) {
							handleFiles(e.dataTransfer.files);
						}
					}}
					onClick={() => document.getElementById("fileInput").click()}
					className="upload-photo-form-browse-button mouse-pointer">
					Browse
				</button>

				<input
					type="file"
					id="fileInput"
					multiple
					accept="image/png, image/jpeg, image/jpg"
					onChange={(e) => handleFiles(e.target.files)}
					hidden
				/>

				<div>
					{images.map((img, i) => (
						<img key={i} src={img.url} alt={`preview-${i}`} />
					))}
				</div>
			</section> */}

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
