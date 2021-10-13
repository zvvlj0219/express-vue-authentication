const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");

//import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

//load .env
dotenv.config();

//connect to mongodb atlas
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true },
  ()=>{
    console.log('connected to mongodb atlas')
  }
);

//middlewares
app.use(express.json());
app.use(cookieParser());

//route middlewares
app.use('/user',authRoute);
app.use('/posts',postRoute);

//server up adnd run
app.listen(3000,()=>{
  console.log('Server up and running 3000')
})