const router = require("express").Router();
const orgController = require("../../controllers/orgController");

// Matches with "/api/organizations"
router.route("/")
    .get(orgController.findAll)
    .post(orgController.create);

router.route("/:id")
    .get(orgController.findById)
    .put(orgController.update)
    .delete(orgController.remove);

module.exports = router;