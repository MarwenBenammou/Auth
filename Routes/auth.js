const router = require('express').Router();
const {response }= require('express');
const User = require('../model/User');

//VALIDATION
const Joi = require('@hapi/joi');

const schema = Joi.object({
    name: Joi.string()
        .min(6)
        .required(),
    email: Joi.string()
        .min(6)
        .required()
        .email(),
    password: Joi.string()
        .min(6)
        .required()
})

router.post('/register', async (req, res) => { 

    // Validate the data before creating user
    const {error} = schema.validate(req.body);
    //res.send(validation);
    if(error) return res.status(400).send(error.details[0].message);



    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

console.log(user);

try{
    const savedUser = await user.save();
    res.json(savedUser);  /*res.json({feres:2});console.log(user);*/

}catch(err){
    res.status(400).send(err);
}
});

module.exports = router;  

//console.log(User);
