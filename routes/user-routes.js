const router = require("express").Router();


const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../controllers/user-controllers");

//create user
router.route("/").get(getAllUsers).post(createUser);
//Crud user by id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);
//add and delete friend
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
