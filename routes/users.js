const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');

const { check, validationResult } = require('express-validator');

const User = require('../models/User');
//@route    POST api/users
//@desc     Register a user
//@access   Public
router.post('/', [
    check('name', 'Name is required')
        .not()
        .isEmpty(),
    check('email', 'Please add a valid email')
        .isEmail(),
    check('password', 'Please enter a password with 6 or more caractors')
        .isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password, vkey } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: "User already exist!" });
        }
        user = new User({
            name,
            email,
            password,
            vkey
        });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        user.vkey = await bcrypt.hash(vkey, salt);
        await user.save();
        const payload = {
            user: {
                id: user.id,
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
        res.status(500).send('Server error)');
    }
});

//@route    get api/users/
//@desc     Get user by token
//@access   Private
// router.get('/', auth, async (req, res) => {
//     const { name, email, password, vkey, isVerified } = req.body;
//     const userFeilds = {}
//     // if (name) userFeilds.name = name;
//     // if (email) userFeilds.email = email;
//     // if (password) userFeilds.password = password;
//     if (vkey) userFeilds.vkey = vkey;

//     const users = await User.findOne({ vkey: userFeilds.vkey }, function (err, obj) { console.log(obj); });
//     console.log(users)
//     if (err) {
//         res.send('something went wrong')
//     };
//     res.json(users);
// })


//@route    PUT api/users/:id
//@desc     Update user
//@access   Public
router.put('/', auth, async (req, res) => {
    const { name, email, password, vkey, isVerified } = req.body;
    //Build a user object
    const userFeilds = {}
    // if (name) userFeilds.name = name;
    // if (email) userFeilds.email = email;
    // if (password) userFeilds.password = password;
    if (vkey) userFeilds.vkey = vkey;
    // if (isVerified) userFeilds.isVerified = true;
    console.log('vkey is: ' + userFeilds.vkey)
    console.log('vkey is: ' + vkey)
    const filter = { vkey: userFeilds.vkey };
    try {
        // let user = await User.findById(req.params.id);
        // if (!user) return res.status(404).json({ msge: 'User not found' });
        // //make sure user own website
        // if (user.id !== req.params.id) {
        //     console.log(user.vkey)
        //     console.log(req.params.id)
        //     return res.status(401).json({ msg: 'Not authorized' });
        // }
            user = await User.findOneAndUpdate(
            filter,
            { $set: { isVerified: true } },
            { new: false }
        );
        res.json(userFeilds);
        // user = await User.findByIdAndUpdate(
        //     req.params.id,
        //     { $set: userFeilds },
        //     { new: false }
        // );
        // res.json(userFeilds);
    }
    catch (err) {
        console.error(err);

        res.status(500).send('Server Error');
    }
});
//@route    GET api/users/getAllUsers
//@desc     Get list of all users
//@access   Private
// router.get('/userlist', auth,  async (req, res) => {

//     if(req.user.isAdmin === true){
//         usersList = {};
//         const users = await User.find({}, (err, users) => {
//             if (err) {
//                 res.send('something went wrong')
//             };

//             res.json(users);

//         })


//     }
// })
module.exports = router;