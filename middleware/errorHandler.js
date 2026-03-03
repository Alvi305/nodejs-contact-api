const { constants } = require("../constants")

const errorHandler = (err, req, res, next) => {  // 4 params!
    const statusCode = err.statusCode || 500;
    res.status(statusCode);

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "What is this crap",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Nothing here bruv",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title: "No No",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: "You are not worthy",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.SERVER_ERROR:
            res.json({
                title: "Crap code made by lazy dev",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        default:
            console.log("GGWP");
            break;
    }
};

module.exports = errorHandler;