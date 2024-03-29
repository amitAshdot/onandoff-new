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
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    }
    catch (err) {
        res.status(500).send('Server Error');
    }
});

//@route    Post api/auth
//@desc     Auth user and get token
//@access   Public
router.post('/', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password, vkey } = req.body;
        try {//find email if good compare with password if good create local token and take id
            let user = await User.findOne({ email });
            if (!user) {
                return status(400).json({ msg: 'wrong username or password' })
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ msg: 'wrong username or password' })
            }
            const payload = {
                user: {
                    id: user.id
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

//@route    GET api/auth
//@desc     Auth user and get token
//@access   Public
router.get('/', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password, vkey } = req.body;

        try {//find email if good compare with password if good create local token and take id
            let user = await User.findOne({ email });
            if (!user) {
                return status(400).json({ msg: 'wrong username or password' })
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ msg: 'wrong username or password' })
            }
            const payload = {
                user: {
                    id: user.id
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
//@route    GET api/auth
//@desc     Get auth to verify user
//@access   Private
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findOne(req.user.vkey).select('-vkey');
        res.json(user);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});
module.exports = router;