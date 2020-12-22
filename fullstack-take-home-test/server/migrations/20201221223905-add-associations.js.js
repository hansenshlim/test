"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface
			.addColumn("Events", "LocationId", {
				type: Sequelize.UUID,
				reference: {
					model: "Location",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "SET NULL",
			})
			.then(() => {
				return queryInterface
					.addColumn("Locations", "EventId", {
						type: Sequelize.UUID,
						reference: {
							model: "Event",
							key: "id",
						},
						onUpdate: "CASCADE",
						onDelete: "SET NULL",
					})
					.then(() => {
						return queryInterface
							.addColumn("Events", "TicketId", {
								type: Sequelize.UUID,
								reference: {
									model: "Ticket",
									key: "id",
								},
							})
							.then(() => {
								return queryInterface.addColumn("Tickets", "EventId", {
									type: Sequelize.UUID,
									reference: {
										model: "Event",
										key: "id",
									},
								});
							});
					});
			});
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.removeColumn("Events", "LocationId").then(() => {
			return queryInterface.removeColumn("Locations", "EventId").then(() => {
				return queryInterface.removeColumn("Events", "TicketId").then(() => {
					return queryInterface.removeColumn("Tickets", "EventId");
				});
			});
		});
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
	},
};
