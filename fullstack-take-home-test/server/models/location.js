"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Location extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Location.hasMany(models.Event);
		}
	}
	Location.init(
		{
			name: DataTypes.STRING,
			img_url: DataTypes.STRING,
			address: DataTypes.STRING,
			EventId: DataTypes.UUID,
		},
		{
			sequelize,
			modelName: "Location",
		}
	);
	return Location;
};
