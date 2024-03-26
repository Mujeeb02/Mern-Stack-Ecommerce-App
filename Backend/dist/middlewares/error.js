export const errorMiddleware = (err, req, res, next) => {
    err.message || (err.message = "Internal Server error"); // If message is not provided, set a default message
    err.statusCode || (err.statusCode = 500); // If statusCode is not provided, set a default status code
    return res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
};
export const TryCatch = (func) => (req, res, next) => {
    return Promise.resolve(func(req, res, next)).catch(next);
};
