const router = require("express").Router();
const eventRoutes = require("./events.js");
const orgRoutes = require("./organizations");
const volunteerRoutes = require("./volunteers");
//Event routes
router.use("/events", eventRoutes);

//Organization routes
router.use("/organizations", orgRoutes);

//volunteer routes
router.use("/volunteers", volunteerRoutes);

module.exports = router;