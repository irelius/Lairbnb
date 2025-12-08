import UploadedPhoto from "./UploadedPhoto/UploadedPhoto";
import "./UploadPhotoForm.css";

import { useCallback, useEffect, useRef, useState } from "react";

function UploadPhotoForm({ setShowPhotos }) {
	const [images, setImages] = useState([]);
	const [disableUpload, setDisableUpload] = useState(false);
	const [fileTooSmall, setFileTooSmall] = useState(false);
	const [dragAndDropHovered, setDragAndDropHovered] = useState(false);

	useEffect(() => {
		if (fileTooSmall) {
			setDisableUpload(true);
		} else if (images.length <= 0) {
			setDisableUpload(true);
		} else {
			setDisableUpload(false);
		}
	}, [images, fileTooSmall]);

	// helper function. handles drag-and-drop and manual input uploads
	//      `useCallback` to handle rerenders and make page more efficient
	const handleFiles = useCallback((files) => {
		// create array of files from data transfer object
		const fileArray = Array.from(files);

		// filter `fileArray`, and with only files that are `image` types, add `url` key with file blob URL
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
			<aside
				className="upload-photo-form-button mouse-pointer"
				onClick={() => {
					setImages([]);
					setShowPhotos(false);
				}}>
				<i className="fa-solid fa-xmark fa-lg"></i>
			</aside>
			<aside
				className="upload-photo-form-button mouse-pointer upload-photo-form-plus-button"
				onClick={() => document.getElementById("fileInput").click()}>
				<i className="fa-solid fa-plus fa-lg"></i>
			</aside>

			{/* Upload Photo Form - header section */}
			<section className="upload-photo-form-header-container">
				<section className="upload-photo-form-header">Upload photos</section>
				<section className="upload-photo-form-subheader">
					{images.length === 0 ? (
						<>No items selected</>
					) : images.length === 1 ? (
						<>1 item selected</>
					) : (
						<>{images.length} items selected</>
					)}
				</section>
			</section>

			{/* Upload Photo Form - Main section */}
			<section
				className={`upload-photo-form-upload-container
                    upload-photo-form-drag-and-drop-${dragAndDropHovered}
                    upload-photo-form-upload-border-${images.length > 0}`}
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
					setDragAndDropHovered(false);
					if (e.dataTransfer.files.length > 0) {
						handleFiles(e.dataTransfer.files);
					}
				}}>
				{/* if no images uploaded */}
				{images.length === 0 ? (
					<>
						<i className="fa-regular fa-images fa-5x" />
						<aside className="upload-photo-form-drag-header">Drag and drop</aside>
						<aside className="upload-photo-form-browser-subheader">or browse for photos</aside>

						{/* browse photos button to manually select photos to upload */}
						<button
							onClick={() => document.getElementById("fileInput").click()}
							className="upload-photo-form-browse-button mouse-pointer">
							Browse
						</button>
					</>
				) : (
					// if images uploaded, display preview
					<div className="upload-photo-form-photo-container">
						{images.map((img, i) => {
							return (
								<UploadedPhoto
									key={img.url}
									img={img}
									i={i}
									setImages={setImages}
									setFileTooSmall={setFileTooSmall}
								/>
							);
						})}
					</div>
				)}

				{/* manual input element */}
				<input
					type="file"
					id="fileInput"
					multiple
					accept="image/png, image/jpeg, image/jpg"
					onChange={(e) => handleFiles(e.target.files)}
					hidden
				/>
			</section>

			{/* Upload Photo Form - footer buttons */}
			<section className="upload-photo-form-footer-container">
				{/* Done button */}
				<button className="upload-photo-form-done-button mouse-pointer">
					{images.length === 0 ? (
						<section
							onClick={() => {
								setShowPhotos(false);
							}}>
							Done
						</section>
					) : (
						<section
							onClick={() => {
								setImages([]);
								setShowPhotos(false);
							}}>
							Cancel
						</section>
					)}
				</button>

				{/* Upload button */}
				<button
					className={`upload-photo-form-upload-button button-disabled-${disableUpload} mouse-pointer`}
					disabled={disableUpload}
					onClick={() => {
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
