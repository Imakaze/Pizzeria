const express = require('express');
const bodyParser = require('body-parser');
const UserService = require('./application/userservice');
const app = express();
const { check, validationResult } = require('express-validator');
const multer = require('multer');
const upload = multer();
const csv = require('csvtojson');
const Duplex = require('stream').Duplex;
const PizzaService=require('./application/pizzaservice');

app.use(bodyParser.json());

app.post('/register', [
  check('email').normalizeEmail().isEmail(),
  check('password').isLength({ min: 5, max: 10 }),
  check('name').isLength({ min: 3, max: 10 }),
], (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  var service = new UserService();
  let response = service.register(req.body);
  res.end(JSON.stringify(response));

});

app.post('/ingredients', upload.any(), function (req, res, next) {

  let stream = new Duplex();
  stream.push(req.files[0].buffer);
  stream.push(null);

  var result = csv({
    noheader: false,
    delimiter: ",",
    eol: "\n"
  }).fromStream(stream).subscribe((json) => {
    console.log(json);
    res.end();
  })

})
app.post('/pizzas/image', upload.any(), function (req, res) {
  var pizzaService = new PizzaService();
  pizzaService.addImage(req.files[0].buffer);
  res.end();
})
app.listen(3000, function () {
  console.log('¡Puerto 3000 abierto!');
})
