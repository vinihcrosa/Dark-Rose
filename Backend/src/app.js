const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(morgan('tiny'));

const router = require('./controllers/route');

app.use('/', router);

app.get("/", (req, res) => {
    res.send({ ok: true });
});

app.listen(3000, () => {
    console.log("Running on port 3000");
});