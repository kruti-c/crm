const express = require('express');
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('We are in user router');
});

module.exports = userRouter;