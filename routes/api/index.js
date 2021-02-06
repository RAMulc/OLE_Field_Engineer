const router = require("express").Router();
const sdRoutes = require("./systemDesigns");
const pdfRoutes = require("./googleStorage");
const auth = require("./auth");

// system design routes
router.use("/systemdesigns", sdRoutes);
router.use("/pdf", pdfRoutes)
router.use("/auth", auth)

module.exports = router;
