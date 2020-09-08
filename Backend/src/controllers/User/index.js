const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {

    console.log(req.body);
    const { user, password } = req.body;

    res.send({ user, password });
});

router.get('/test', (req, res) => {
    res.send({ User_test: true });
})

module.exports = router;