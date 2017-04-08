var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.body.name);  
  console.log(req.body.email); 
  res.send('respond with a resource');
});


router.post('/hello', function(req, res) {  
    console.log(req.body.name);  
    console.log(req.body.email);  
    res.send('Post Over');    
}); 


module.exports = router;
