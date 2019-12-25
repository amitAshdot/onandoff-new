const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config')
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');

//@route    GET api/auth
//@desc     Get logged in user
//@access   Private
router.get('/',auth, async(req, res) => {
    try{
        const file = await File.findById(req.user.id).select('-password');
        res.json(file);
        
    }
    catch(err){
        res.status(500).send('Server Error');
    }
});

//@route    Post api/auth
//@desc     Auth user and get token
//@access   Public
router.post('/', [],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { text } = req.body;

        try {//find email if good compare with password if good create local token and take id
            let user = await User.findOne({ email });
            if (!user) {
                return status(400).json({ msg: 'wrong username or password' })
            }

            const payload = {
                file: {
                    id: file.id
                }
            }

            jwt.sign(payload, config.get('jwtSecret'), {
                expiresIn: 3600000
            }, (err, token) => {
                if (err) throw err;
                res.json({ token });
            });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    });
module.exports = router;