require("dotenv").config();
const AWS = require("aws-sdk");

const NAME_OF_BUCKET = process.env.BUCKET_NAME;
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;

const multer = require("multer");

const s3 = new AWS.S3({
	apiVersion: "2006-03-01",
	accessKeyId: AWS_ACCESS_KEY_ID,
	secretAccessKey: AWS_SECRET_ACCESS_KEY,
});

// --------------------------- Public UPLOAD ------------------------

const singlePublicFileUpload = async (file, type, typeId) => {
	const { originalname, mimetype, buffer } = await file;
	const path = require("path");

	// name of file in s3 bucket, using type, typeId, and unix datetime
	const newFileName = `${type}/${typeId}_${Date.now()}` + path.extname(originalname);

	const uploadParams = {
		Bucket: NAME_OF_BUCKET,
		Key: newFileName,
		Body: buffer,
		ACL: "public-read",
	};

	const result = await s3.upload(uploadParams).promise();

	// save the name of the file in your bucket as the key in your database to retrieve for later
	return result.Location;
};

const multiplePublicFileUpload = async (files, type, typeId) => {
	return await Promise.all(
		files.map((file) => {
			return singlePublicFileUpload(file, type, typeId);
		})
	);
};

// --------------------------- Prviate UPLOAD ------------------------

const singlePrivateFileUpload = async (file, type, typeId) => {
	const { originalname, mimetype, buffer } = await file;
	const path = require("path");

	if (mimetype !== "image/png" && mimetype !== "image/jpg" && mimetype !== "image/jpeg") {
		return { error: "Error: Invalid file format. Please upload a .png, .jpg, or .jpeg formatted file." };
	}

	// name of file in s3 bucket, using type, typeId, and unix datetime
	const newFileName = `${type}/${typeId}_${Date.now()}` + path.extname(originalname);

	const uploadParams = {
		Bucket: NAME_OF_BUCKET,
		Key: newFileName,
		Body: buffer,
		ACL: "public-read",
	};

	const result = await s3.upload(uploadParams).promise();

	// save the name of the file in your bucket as the key in your database to retrieve for later
	return result.Location;
};

const multiplePrivateFileUpload = async (files, type, typeId) => {
	return await Promise.all(
		files.map((file) => {
			return singlePrivateFileUpload(file, type, typeId);
		})
	);
};

const retrievePrivateFile = (key) => {
	let fileUrl;
	if (key) {
		fileUrl = s3.getSignedUrl("getObject", {
			Bucket: NAME_OF_BUCKET,
			Key: key,
		});
	}
	return fileUrl || key;
};

// --------------------------- Delete ---------------------------
const singlePublicFileDelete = async (fileName) => {
	const params = {
		Bucket: NAME_OF_BUCKET,
		Key: fileName,
	};

	const data = await s3.deleteObject(params).promise();
	return data;
};

const multiplePublicFileDelete = async (files) => {
	return await Promise.all(
		files.map((file) => {
			return singlePublicFileDelete(file);
		})
	);
};

// --------------------------- Storage ------------------------

const storage = multer.memoryStorage({
	destination: function (req, file, callback) {
		callback(null, "");
	},
});

const singleMulterUpload = (nameOfKey) =>
	multer({
		storage: storage,
		limits: {
			fileSize: 2 * 1024 * 1024,
		},
		fileFilter: function (req, file, cb) {
			// Optional: Add a file filter to allow only image types
			if (file.mimetype !== "image/png" && file.mimetype !== "image/jpg" && file.mimetype !== "image/jpeg") {
				return cb(
					new Error("Error: Invalid file format. Please upload only .png, .jpg, or .jpeg formatted files"),
					false
				);
			}

			cb(null, true);
		},
	}).single(nameOfKey);

const multipleMulterUpload = (nameOfKey) =>
	multer({
		storage: storage,
		limits: {
			fileSize: 2 * 1024 * 1024,
		},
		fileFilter: function (req, file, cb) {
			// Optional: Add a file filter to allow only image types
			if (file.mimetype !== "image/png" && file.mimetype !== "image/jpg" && file.mimetype !== "image/jpeg") {
				return cb(
					new Error("Error: Invalid file format. Please upload only .png, .jpg, or .jpeg formatted files."),
					false
				);
			}

			cb(null, true);
		},
	}).array(nameOfKey);

module.exports = {
	s3,
	singlePublicFileUpload,
	multiplePublicFileUpload,
	singlePrivateFileUpload,
	multiplePrivateFileUpload,
	retrievePrivateFile,
	singleMulterUpload,
	multipleMulterUpload,
	singlePublicFileDelete,
	multiplePublicFileDelete,
};
