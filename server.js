const express = require('express')
const bodyParser = require('body-parser');
const UserService = require('./application/userservice');
const app = express();
const { check, validationResult } = require('express-validator');
app.use(bodyParser.json());
const redis = require("./infraestructure/userrepository");


app.post('/register', [
  check('email').normalizeEmail().isEmail(),
  check('password').isLength({min: 5, max: 10}),
  check('name').isLength({min:3, max:10}),
], (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  var service = new UserService();
  let response = service.register(req.body);
  res.end(JSON.stringify(response));

});

app.listen(3000, function () {
  console.log('¡Puerto 3000 abierto!');
})



