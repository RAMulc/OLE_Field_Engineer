const router = require("express").Router();
const sdRoutes = require("./systemDesigns");

// system design routes
router.use("/systemdesigns", sdRoutes);

module.exports = router;
