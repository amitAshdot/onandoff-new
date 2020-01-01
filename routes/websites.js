const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Websites = require('../models/Websites');


//@route    GET api/websites
//@desc     get all user websites
//@access   Private
router.get('/',auth ,async (req, res) => {
    try {
        const users = await Websites.find({ user: req.user.id }).sort({ date: -1 });
        res.json(users);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
//@route    Post api/users
//@desc     add new website
//@access   Private
router.post('/',
    [auth,
        [
            check('name', 'name is required')
            .not()
            .isEmpty(),
        check('url', 'url is required')
            .not()
            .isEmpty(),
        check('divId', 'divId is required')
            .not()
            .isEmpty(),
        ]],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, url, divId, date, timeSchedule,isShow } = req.body;
        try {
            const newWebsite = new Websites({
                name,
                url,
                divId,
                date,
                timeSchedule,
                isShow,
                user: req.user.id
            });
            const website = await newWebsite.save();
            res.json(newWebsite);
        }
        catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    });

//@route    PUT api/users/:id
//@desc     Update website
//@access   Private
router.put('/:id',auth, async(req, res) => {
    const { name, url, divId, date, timeSchedule, isShow } = req.body;

    //Build a website object
    const websitesFeilds ={}
    if(name) websitesFeilds.name = name;
    if(url) websitesFeilds.url = url;
    if(divId) websitesFeilds.divId = divId;
    if(date) websitesFeilds.date = date;
    if(timeSchedule) websitesFeilds.timeSchedule = timeSchedule;
    if(isShow!== null) websitesFeilds.isShow = isShow;
    try{
        let website = await Websites.findById(req.params.id);
        if(!website) return res.status(404).json({msge: 'Website not found'});
        //make sure user own website
        if(website.user.toString() !== req.user.id){
            return res.status(401).json({msg: 'Not authorized'});
        }
        website = await Websites.findByIdAndUpdate(
            req.params.id,
            {$set : websitesFeilds},
            {new: true}
        );
        
        res.json(website);

    }
    catch(err){
        console.error(err);

        res.status(500).send('Server Error');
    }
});

//@route    DELETE api/users/:id
//@desc     Delete website
//@access   Private
router.delete('/:id', auth, async(req, res) => {
console.log("the req is: " ,req)
    try{
        let website = await Websites.findById(req.params.id);
        if(!website) return res.status(404).json({msge: 'Website not found'});
        //make sure user own website
        if(website.user.toString() !== req.user.id){
            return res.status(401).json({msg: 'Not authorized'});
        }
        await Websites.findByIdAndRemove(req.params.id)

        res.json({msg:"contact removed"});
    }
    catch(err){
        res.status(500).send('Server Error');
    }
});
module.exports = router;