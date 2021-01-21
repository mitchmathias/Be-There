const router = require("express").Router();
const eventRoutes = require("./Events.js");
const orgRoutes = require("./Organizations");
const volunteerRoutes = require("./Volunteers");
//Event routes
router.use("/events", eventRoutes);

//Organization routes
router.use("/organizations", orgRoutes);

//volunteer routes
router.use("/volunteers", volunteerRoutes);

module.exports = router;