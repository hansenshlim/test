const router = require("express").Router();
const LocationController = require("../controllers/LocationController");

router.post("/create", LocationController.createLocation);

module.exports = router;
