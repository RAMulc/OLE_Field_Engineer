const router = require("express").Router();
const calcController = require("../../controllers/calcController");

// Matches with "/api/calculations"
router.route("/tensionstate")
    .post(calcController.tensionState);

module.exports = router;