const router = require("express").Router();
const TransactionController = require("../controllers/TransactionController");

router.post("/purchase", TransactionController.purchase);
router.get("/get_info", TransactionController.info);

module.exports = router;
