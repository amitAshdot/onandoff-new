
const express = require('express');
const router = express.Router();

const Websites = require('../models/Websites');


//@route    GET api/website
//@desc     get specific website
//@access   public
router.get('/', async (req, res) => {
    try {
        const users = await Websites.find({ _id:req.query});
        res.json(users);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;