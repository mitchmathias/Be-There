const router = require("express").Router();
const eventController = require("../../controllers/eventController");

// Matches with "/api/events"
router.route("/")
    .get(eventController.findAll)
    .post(eventController.create);

router.route("/:id")
    .get(eventController.findById)
    .put(eventController.update)
    .delete(eventController.remove);

module.exports = router;