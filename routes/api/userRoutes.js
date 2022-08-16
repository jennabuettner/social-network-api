const router = require('express').Router();
const {
    createUser,
    getUsers,
    getOneUser,
    updateUser,
    deleteUser,
    createFriend,
    deleteFriend,
} = require ('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getOneUser).put(updateUser);

router.route('/:userId').get(getOneUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(createFriend);

router.route('/:userId/friends/:friendId').delete(deleteFriend);

module.exports = router;