const express = require('express');
const router = express.Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const {registerValidation, loginValidation} = require('../validation');

//register
router.post('/register',async (req,res)=>{
  console.log('register url clear')
  //validate the date
  const {error} = registerValidation(req.body);
  if(error){
    console.log(error)
    return res.status(400).send(error.details[0].message);
  }else{
    console.log('valid clear')
  }
  
  //checking if the user is already in the database
  const emailExist = await User.findOne({email:req.body.email});
  if(emailExist){
    return res.status(400).send('Email already exists');
  }else{
    console.log('email exists clear')
  }
  
  //hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  console.log('hash clear')
  
  //create a new user
  const user = new User({
    email:req.body.email,
    username:req.body.username,
    password:hashedPassword
  });

  try{
    console.log('try ')
    const createdUser = await User.create(user);
    await createdUser.save();

    // const savedUser = await user.save();

    console.log('createdUser')


    res.status(200).send(createdUser)
  }catch(err){
    console.log(err)
    res.status(400).send(err);
  }
});

//login
router.post('/login', async (req,res)=>{

  console.log('server login')
  
  //validate the data 
  const {error} = loginValidation(req.body);
  if(error){
    return res.status(400).send(error.details[0].message);
  }else{
    console.log('valid clear')
  };

  //checking if the email exists
  const user = await User.findOne({email:req.body.email});
  if(!user){
    return res.send(400).send('Email is not found');
  }else{
    console.log('email exists')
  }

  //password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if(!validPass){
    return res.status(400).send('Invalid Password');
  }else{
    console.log(validPass)
    console.log('bcrypt compare clear')
  }

  //create and assign a token 1h
  const token = jwt.sign({_id:user._id}, process.env.TOKEN_SECRET,{ algorithm: 'HS256',expiresIn: '1h' });
  
  console.log(token)
  
  console.log(res.header())
  
  //set token in header and send token to client
  res.header('authentication',token).send(token);
  // res.header('auth-token',token).send(token);
});



module.exports = router;