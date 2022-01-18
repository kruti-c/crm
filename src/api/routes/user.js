const express = require('express');
const userRouter = express.Router();

const user = require('../../models/users');

//GET 
userRouter.get('/', async (req, res) => {
    ///DEBUG: res.send('We are in user router');
    try {
        const rec = await user.find();
        res.json(rec);

    } catch (error) {
        res.json({"message": error});   
    }
});

//GET BY 
userRouter.get('/:userId', async (req, res) => {
    ///DEBUG: res.send('We are in user router');
    console.log(req.params.userId);
    try {
        const rec = await user.findById(req.params.userId);
        res.json(rec);

    } catch (error) {
        res.json({"message": error});   
    }
});

//POST:
userRouter.post('/', async (req,res) => {
    // /DEBUG: console.log(req.body);
    const rec = new user({
        name:  req.body.name,
        lastName: req.body.lastName
    });

    try {
        const saveUSer = await rec.save() 
        res.json(saveUSer); 
    } catch (error) {
        res.json({"messgae": error});
    }

})

//DELETE:
userRouter.delete('/:userId', async (req,res) => {
    // /DEBUG: console.log(req.body);
    try {
        const deleteUser = await user.remove({_id: req.params.userId}); 
        res.json(deleteUser); 
    } catch (error) {
        res.json({"messgae": error});
    }

})

//UPDATE:
userRouter.patch('/:userId', async (req,res) => {
    // /DEBUG: console.log(req.body);
    try {
        const updateUser = await user.updateOne(
            {_id: req.params.userId}, 
            {$set: {lastName: req.body.lastName}}); 
        res.json(updateUser); 
    } catch (error) {
        res.json({"messgae": error});
    }

})


module.exports = userRouter;