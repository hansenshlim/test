const router = require("express").Router();
const eventsRouter = require("./eventsRouter");
const locationsRouter = require("./locationsRouter");
const transactionsRouter = require("./transactionRouter");

router.use("/event", eventsRouter);
router.use("/location", locationsRouter);
router.use("/transaction", transactionsRouter);

module.exports = router;
