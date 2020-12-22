const { Transaction, Ticket } = require("../models");
class TransactionController {
	static purchase(req, res, next) {
		let { qty, price, Customer_name, EventId } = req.body;
		Transaction.create({
			qty,
			price,
			Customer_name,
			EventId,
		})
			.then((transactions) => {
				res.status(201).json({ transactions });
			})
			.catch((err) => {
				next(err);
			});
	}
	static info(req, res, next) {
		let { id } = req.body;
		Transaction.findByPk(id)
			.then((transactions) => {
				res.status(200).json({ transactions });
			})
			.catch((err) => {
				next(err);
			});
	}
}

module.exports = TransactionController;
