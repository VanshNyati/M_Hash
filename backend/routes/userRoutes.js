const express = require('express');
const { signupUser, loginUser, getUserDetails } = require('../controllers/userController');
const { forgotPassword } = require('../controllers/forgotPasswordController');
const { changePassword } = require('../controllers/changePasswordController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);
router.get('/user/details', authMiddleware, getUserDetails);
// router.post('/forgot-password', forgotPassword);
// router.post('/change-password', changePassword);

module.exports = router;