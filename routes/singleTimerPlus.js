const express = require('express');
const router = express.Router();

const TimerPlus = require('../models/timerPlus');

//@route    GET api/website
//@desc     get specific website
//@access   public
router.get('/', async (req, res) => {
    try {
        const users = await TimerPlus.find({ _id:req.query});
        res.json(users);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;