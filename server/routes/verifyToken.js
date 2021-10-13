const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){
  console.log(req.headers.authentication)
  console.log(req.header('authentication'))
  const token = req.headers.authentication;
  if(!token){
    console.log('Access Denied')
    return res.status(401).send('Access Denied');
  }

  try{
    const verified = jwt.verify(token, process.env.TOKEN_SECERT);
    console.log('verify')
    console.log(verified)
    req.user = verified;
    next();
  }catch(err){
    res.status(400).send('Invalid Token')
  }
}