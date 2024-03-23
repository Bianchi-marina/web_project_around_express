const express = require('express');
const fs = require('fs');

const router = express.Router();

const { getAllUsers, getUserById, createUser  } = require('../controllers/users');

router.get('/', getAllUsers);

router.get('/:userId', getUserById);

router.post('/', createUser);


module.exports = router;