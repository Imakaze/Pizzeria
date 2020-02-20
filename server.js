const express = require('express')
const bodyParser = require('body-parser');
const UserService = require('./application/userservice');
const app = express();
const { check, validationResult } = require('express-validator');

app.use(bodyParser.json());

app.post('/register', [
  check('email').isEmail(), 
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
