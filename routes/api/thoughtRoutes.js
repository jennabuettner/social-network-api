module.exports = router;
const router = require("express").Router();
const {
  getThoughts,
  getOneThought,
  createThought,
  updateThought,
  removeThought,
  addComment,
  deleteComment,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post(createThought);

router
  .route("/:thoughtsId")
  .get(getOneThought)
  .put(updateThought)
  .delete(removeThought);

router.route("/:thoughtsId/reactions").post(addComment).delete(deleteComment);

module.exports = router;