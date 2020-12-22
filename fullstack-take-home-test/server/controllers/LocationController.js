const { Location } = require("../models");
class LocationController {
	static createLocation(req, res, next) {
		let { name, img_url, address, EventId } = req.body;
		Location.create({
			name,
			img_url,
			address,
			EventId,
		})
			.then((locations) => {
				res.status(201).json({ locations });
			})
			.catch((err) => {
				next(err);
			});
	}
}

module.exports = LocationController;
