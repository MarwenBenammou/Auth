const router = require('express').Router();
const {response }= require('express');
const User = require('../model/User');

router.post('/register', async (req, res) => { 
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

console.log(user);

try{
    const savedUser = await user.save();
    /*res.json(savedUser); */ res.json({feres:2}); console.log(user);

}catch(err){
    res.status(400).send(err);
}
});

module.exports = router;  

//console.log(User);
