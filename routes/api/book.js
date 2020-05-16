const router = require("express").Router();
const bookController = require("../../controllers/bookController");

router.route("/").post(booksController.saveBooks);

module.exports = router;
