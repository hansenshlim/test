const router = require("express").Router();
const EventController = require("../controllers/EventController");

router.post("/create", EventController.createEvent);
router.post("/ticket/create", EventController.createTicket);
router.get("/get_info", EventController.info);

module.exports = router;
