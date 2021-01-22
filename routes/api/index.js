const router = require("express").Router();
const eventRoutes = require("./events");
const orgRoutes = require("./organizations");
const userRoutes = require("./user");
//Event routes
router.use("/events", eventRoutes);

//Organization routes
router.use("/organizations", orgRoutes);

//volunteer routes
router.use("/users", userRoutes);

module.exports = router;