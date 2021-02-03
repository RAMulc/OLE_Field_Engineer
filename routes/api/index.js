const router = require("express").Router();
const sdRoutes = require("./systemDesigns");
const pdfRoutes = require("./googleStorage");

// system design routes
router.use("/systemdesigns", sdRoutes);
router.use("/pdf", pdfRoutes)

module.exports = router;
