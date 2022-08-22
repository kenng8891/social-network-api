const router = require("express").Router;

const {
  getThoughts,
  getThoughtsbyId,
  createThoughts,
  updateThoughts,
  deleteThoughts,
  createReaction,
  removeReaction,
} = require("../controllers/thought-controllers");

//create get post routes
router.route("/").get(getThoughts).post(createThoughts);

//CRUD routes using ID
router
  .route("/:id")
  .get(getThoughtsbyId)
  .put(updateThoughts)
  .delete(deleteThoughts);

//create reaction using thought ID
router.route("/:thoughtId/reactions").post(createReaction);

//delete reaction by thought ID
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
