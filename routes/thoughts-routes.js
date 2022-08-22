const router = require("express").Router();

const {
  getThoughts,
  getThoughtsById,
  createThoughts,
  updateThoughts,
  deleteThoughts,
  createReaction,
  removeReaction,
} = require("../controllers/thoughts-controllers");

//create get post routes
router.route("/").get(getThoughts).post(createThoughts);

//CRUD routes using ID
router
  .route("/:id")
  .get(getThoughtsById)
  .put(updateThoughts)
  .delete(deleteThoughts);

//create reaction using thought ID
router.route("/:thoughtId/reactions").post(createReaction);

//delete reaction by thought ID
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
