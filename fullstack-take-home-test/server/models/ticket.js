"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Ticket extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Ticket.hasOne(models.Event);
		}
	}
	Ticket.init(
		{
			type: DataTypes.STRING,
			price: DataTypes.INTEGER,
			quota: DataTypes.INTEGER,
			EventId: DataTypes.UUID,
		},
		{
			sequelize,
			modelName: "Ticket",
		}
	);
	return Ticket;
};
