const router = require("express").Router();
const sdsController = require("../../controllers/sdsController");

// Matches with "/api/systemDesign"
router.route("/")
  .get(sdsController.findAll)
  .post(sdsController.create);

// Matches with "/api/systemDesign/filter"
router.route("/filter/:criteria")
  .get(sdsController.find);

// Matches with "/api/systemDesign/:id"
router.route("/:id")
  .get(sdsController.findById)
  .put(sdsController.update)
  .delete(sdsController.remove);

module.exports = router;
