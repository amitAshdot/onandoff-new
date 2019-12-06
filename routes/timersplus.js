const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Timerplus = require('../models/timerplus');


//@route    GET api/timerplus
//@desc     get all timersPlus
//@access   Private
router.get('/', auth, async (req, res) => {
    try {
        const users = await Timerplus.find({ user: req.user.id }).sort({ date: -1 });
        res.json(users);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route    Post api/timerplus
//@desc     add new timerPlus
//@access   Private
router.post('/',
    [auth,
        [check('name', 'name is required')
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
debugger
        const { name, url, divId, date, timeSchedule,isShow } = req.body;
        console.log(req)

        try {
            const newTimerplus = new Timerplus({
                name,
                url,
                divId,
                date,
                timeSchedule,
                context,
                isShow,
                user: req.user.id
            });
            const timerplus = await newTimerplus.save();
            res.json(newTimerplus);
        }
        catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    });

//@route    PUT api/timerplus/:id
//@desc     Update timerplus
//@access   Private
router.put('/:id',auth, async(req, res) => {
    const { name, url, divId, date, context, isShow } = req.body;

    //Build a timerplus object
    const timersPlusFeilds ={}
    if(name) timersPlusFeilds.name = name;
    if(url) timersPlusFeilds.url = url;
    if(divId) timersPlusFeilds.divId = divId;
    if(date) timersPlusFeilds.date = date;
    if(context) timersPlusFeilds.context = context;
    if(isShow) timersPlusFeilds.isShow = isShow;

    try{
        let timerplus = await timersPlus.findById(req.params.id);
        if(!timerplus) return res.status(404).json({msge: 'Timerplus not found'});
        //make sure user own timerplus
        if(timerplus.user.toString() !== req.user.id){
            return res.status(401).json({msg: 'Not authorized'});
        }
        timerplus = await Timerplus.findByIdAndUpdate(
            req.params.id,
            {$set : timersPlusFeilds},
            {new: true}
        );
        
        res.json(timerplus);

    }
    catch(err){
        console.error(err);

        res.status(500).send('Server Error');
    }
});

//@route    DELETE api/timerplus/:id
//@desc     Delete timerplus
//@access   Private
router.delete('/:id', auth, async(req, res) => {

    try{
        let timerplus = await TimersPlus.findById(req.params.id);
        if(!timerplus) return res.status(404).json({msge: 'Timerplus not found'});
        //make sure user own timerplus
        if(timerplus.user.toString() !== req.user.id){
            return res.status(401).json({msg: 'Not authorized'});
        }
       
        await TimersPlus.findByIdAndRemove(req.params.id)

        res.json({msg:"contact removed"});

    }
    catch(err){
        console.error(err);

        res.status(500).send('Server Error');
    }
});
module.exports = router;