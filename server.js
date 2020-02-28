const express = require('express')
const bodyParser = require('body-parser');
const multer = require('multer')
const upload = multer()
const csv = require('csvtojson');
const Duplex = require('stream').Duplex;
const IngredientsService =require ('./application/IngredientsService')
const userController = require('./controlador/usercontroller')
 
const app = express();
 
app.use(bodyParser.json());
userController(app);
 
 
app.post('/ingredients', upload.any(), function (req, res){
   let stream = new Duplex();
  stream.push(req.files[0].buffer);
  stream.push(null);
 
  var result = csv({
    noheader: false,
    delimiter:",", 
    eol:"\n"
  }).fromStream(stream).subscribe((json) => {
    console.log(json);
    var json = new IngredientsService();
    res.end();
  })
 
 
})
 
   
  app.listen(3000, function () {
    console.log('¡Puerto 3000 abierto!');
  })
