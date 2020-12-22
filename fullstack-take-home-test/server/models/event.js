"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Event extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Event.hasOne(models.Location);
			Event.hasMany(models.Ticket);
		}
	}
	Event.init(
		{
			name: DataTypes.STRING,
			img_url: DataTypes.STRING,
			start_date: DataTypes.DATE,
			end_date: DataTypes.DATE,
			LocationId: DataTypes.UUID,
			TicketId: DataTypes.UUID,
		},
		{
			sequelize,
			modelName: "Event",
		}
	);
	return Event;
};
