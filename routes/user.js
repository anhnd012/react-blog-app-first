const express = require('express');
const router = express.Router();

const { register, login, deleteUser, updateUser, getUserById } = require('../controllers/userController')

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/:id').delete(deleteUser).put(updateUser).get(getUserById)

module.exports = router