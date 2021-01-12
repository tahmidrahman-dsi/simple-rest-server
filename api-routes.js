let router = require("express").Router();

router.get("/", function (req, res) {
  res.json({
    status: "API it is working",
    message: "Welcome to RESTHub and nodemon",
  });
});

var contactController = require("./contactController");

// contact routes
router
  .route("/contacts")
  .get(contactController.index)
  .post(contactController.new);

router
  .route("/contacts/:contact_id")
  .get(contactController.view)
  .patch(contactController.update)
  .put(contactController.update)
  .delete(contactController.delete);

module.exports = router;
