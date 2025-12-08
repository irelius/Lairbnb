import { useEffect } from "react";
import "./UploadedPhoto.css";

function UploadedPhoto({ img, i, setImages, setFileTooSmall }) {
	const imageSize = img.file.size;

	useEffect(() => {
		if (img.file.size < 50000) {
			setFileTooSmall(true);
		}
	}, [img]);

	return (
		<div className="upload-photo-form-photo-columns">
			{/* uploaded photo delete button */}
			<section
				onClick={() => {
					setImages((prev) => [...prev.slice(0, i), ...prev.slice(i + 1)]);
				}}
				className="upload-photo-form-photo-trash-button mouse-pointer">
				<i className="fa-solid fa-trash-can" />
			</section>

			<section className="upload-photo-form-photo-preview">
				{/* uploaded photo preview display */}
				<img
					onDragStart={(e) => e.preventDefault()}
					className="upload-photo-form-photo"
					src={img.url}
					alt={`preview-${img.url}`}
				/>
				{imageSize < 50000 ? (
					<div className="upload-photo-form-size-warning-container">
						<i className="fa-solid fa-circle fa-2xs upload-photo-form-warning-dot"></i>
						<section className="upload-photo-form-size-warning">UNDER 50 KB</section>
					</div>
				) : (
					<></>
				)}
			</section>
		</div>
	);
}

export default UploadedPhoto;
