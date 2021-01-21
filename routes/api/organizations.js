const router = require("express").Router();
const orgsController = require("../../controllers/orgsController");

// Matches with "/api/organizations"
router.route("/")
    .get(orgsController.findAll)
    .post(orgsController.create);

router.route("/:id")
    .get(orgsController.findById)
    .put(orgsController.update)
    .delete(orgsController.remove);

module.exports = router;