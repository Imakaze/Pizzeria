const express = require('express')
const bodyParser = require('body-parser');
const UserService = require('./application/userservice');

const { check, validationResult } = require('express-validator');
const multer = require('multer')
const upload = multer()
const csv = require('csvtojson');
const Duplex = require('stream').Duplex;
const userControler = require('./controllers/usercontroller') 

const app = express();

app.use(bodyParser.json());
 
userControler(app);
 
app.post('/ingredients', upload.any(), function (req, res, next) {
 
  let stream = new Duplex();
  stream.push(req.files[0].buffer);
  stream.push(null);
 
  var result = csv({
    noheader: false,
    delimiter:",", 
    eol:"\n"   
  }).fromStream(stream).subscribe((json) => {
    console.log(json);
    res.end();
  })
})

 
app.listen(3000, function () {
  console.log('¡Puerto 3000 abierto!');
})
