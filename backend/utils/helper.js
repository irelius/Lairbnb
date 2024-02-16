// backend/utils/helper.js

// helper function for a particular element not found
const notFound = (el, code) => {
    let error = new Error(`${el} couldn't be found`);
    error.status = code;
    error.statusCode = code;
    return error
}


// helper function if element is forbidden access to current user
const forbidden = () => {
    let error = new Error("Forbidden");
    error.status = 403;
    error.statusCode = 403;
    return error;
}


// Helper function for validation error
const validationError = (message, code) => {
    let error = new Error("Validation error");
    error.status = code;
    error.errors = {
        endDate: message,
        statusCode: code
    }
    return error;
}

module.exports = {
    notFound,
    forbidden,
    validationError,
};
