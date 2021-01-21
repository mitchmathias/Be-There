const router = require("express").Router();
const volunteersController = require("../../controllers/volunteersController");

// Matches with "/api/volunteers"
router.route("/")
    .get(volunteersController.findAll)
    .post(volunteersController.create);

router.route("/:id")
    .get(volunteersController.findById)
    .put(volunteersController.update)
    .delete(volunteersController.remove);

module.exports = router;