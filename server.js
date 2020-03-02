const express = require('express')
const bodyParser = require('body-parser');
const multer = require('multer')
const upload = multer()
const csv = require('csvtojson');
const Duplex = require('stream').Duplex;
const registerController = require('./utils/registercontroller')
const app = express();
const IngredientsService = require('./application/IngredientsService')

app.use(bodyParser.json());
registerController(app, __dirname);



app.post('/ingredients', upload.any(), function (req, res) {

  let stream = new Duplex();
  stream.push(req.files[0].buffer);
  stream.push(null);

  var ingredientsService = new IngredientsService();

  var ingredients = [];
  let result = csv({
    noheader: false,
    delimiter: ",",
    eol: "\n"
  }).fromStream(stream).subscribe(
    (json) => {
      ingredients.push(json);
    },
    () => { },
    () => {
      ingredientsService.addRange(ingredients);
      res.end()
    }
  )



})

 
app.listen(3000, function () {
  console.log('¡Puerto 3000 abierto!');
})
