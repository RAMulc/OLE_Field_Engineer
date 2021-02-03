const router = require("express").Router();
const gsController = require("../../controllers/gsController");

// Matches with "/api/"
router.route("/:id")
    .get(gsController.findPdf);

module.exports = router;