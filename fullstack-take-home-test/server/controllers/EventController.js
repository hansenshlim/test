const { Event, Location, Ticket } = require("../models");
class EventController {
	static createEvent(req, res, next) {
		let {
			name,
			img_url,
			start_date,
			end_date,
			LocationId,
			TicketId,
		} = req.body;
		Event.create({
			name,
			img_url,
			start_date,
			end_date,
			LocationId,
			TicketId,
		})
			.then((events) => {
				res.status(201).json({ events });
			})
			.catch((err) => {
				next(err);
			});
	}

	static createTicket(req, res, next) {
		let { type, price, quota, EventId } = req.body;
		Ticket.create({
			type,
			price,
			quota,
			EventId,
		})
			.then((tickets) => {
				res.status(201).json({ tickets });
			})
			.catch((err) => {
				next(err);
			});
	}
	static info(req, res, next) {
		Event.findAll({
			include: [
				{
					model: Location,
				},
				{
					model: Ticket,
				},
			],
		});
	}
}

module.exports = EventController;
