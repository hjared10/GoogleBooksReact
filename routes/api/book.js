const router = require("express").Router();
const bookController = require("../../controllers/bookController");

router.route("/").post(bookController.saveBooks);

module.exports = router;
