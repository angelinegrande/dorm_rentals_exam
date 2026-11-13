const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get('/dormitory', userController.getAllUsers);
router.post('/dormitory', userController.createUser);
router.delete('/dormitory/:id', userController.deleteUser);

module.exports = router;