const express = require('express')
const bodyParser = require('body-parser');
const UserService = require('./application/userservice');
const app = express();
var requirejs = require('requirejs');
const { check, validationResult } = require('express-validator');
require = require("esm")(module/*, options*/);
module.exports = require("./server.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.post('/user', (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password
  }).then(user => res.json(user));
});

app.post('/user', [
  // username must be an email
  check('username').isEmail(),
  // password must be at least 5 chars long
  check('password').isLength({ min: 5 })
], (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  User.create({
    username: req.body.username,
    password: req.body.password
  }).then(user => res.json(user));
});

app.post('/register',  (req, res) => {
  var service = new UserService();
  let response = service.register(req.body);
  res.end(JSON.stringify(response));
  console.log(req.body)
}); 

app.listen(3000, function () {
  console.log('¡Puerto 3000 abierto!');
})
