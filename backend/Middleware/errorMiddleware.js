const errorHandler = (err, req, res, next) => {
    // check if an error statusCode was assigned in controller and if not use a status of 500
    const statusCode = res.statusCode ? res.statusCode : 500;

    // assign global error status
    res.status(statusCode);

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
};

module.exports = {
    errorHandler,
};
