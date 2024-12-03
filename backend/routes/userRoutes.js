const express = require('express');
const router = express.Router();
const { getAllUsers, updateUserRole, deleteUser } = require('../controllers/userController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

router.get('/', verifyToken, isAdmin, getAllUsers);
router.put('/role', verifyToken, isAdmin, updateUserRole);
router.delete('/:username', verifyToken, isAdmin, deleteUser);
module.exports = router;
