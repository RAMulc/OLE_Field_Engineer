const router = require("express").Router();
const sdRoutes = require("./systemDesigns");
const pdfRoutes = require("./googleStorage");
const calcRoutes = require("./calculations");
const auth = require("./auth");

// system design routes
router.use("/systemdesigns", sdRoutes);
router.use("/pdf", pdfRoutes);
router.use("/auth", auth);
router.use("/calculations", calcRoutes);

module.exports = router;
