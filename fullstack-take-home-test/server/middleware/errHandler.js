function errHandler(err, req, res, next) {
	console.log(err, "<<<<<<<<< ini dari error handler");
	let errors = [];
	let statusCode = 500;

	// proses error disini
	switch (err.name) {
		case "JsonWebTokenError":
			errors.push("Fail to authenticate!");
			statusCode = 401;
			break;
		case "SequelizeValidationError":
			err.errors.forEach((el) => {
				errors.push(el.message);
			});
			statusCode = 400;
			break;
		case "SequelizeUniqueConstraintError":
			err.errors.forEach((el) => {
				errors.push(el.message);
			});
			statusCode = 400;
			break;
		default:
			errors.push(err.msg || "internal server error");
			statusCode = err.statusCode || 500;
	}
	res.status(statusCode).json({
		errors: errors,
	});
}

module.exports = errHandler;
