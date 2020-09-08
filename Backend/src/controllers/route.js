const express = require('express');
const router = express.Router();

const UserController = require('./User');

router.use('/user', UserController);

router.get('/test', (req, res) => {
    res.send({ teste: true });
})

module.exports = router;