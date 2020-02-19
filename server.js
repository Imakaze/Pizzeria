var express = require('express');
const bodyParser = require('body-parser');
const UserService = require('./application/userservice');
var app = express();
app.use(bodyParser.json());


app.post('/register',  (req, res) => {
  var service = new UserService();
  let response = service.register(req.body);
  res.end(JSON.stringify(response));
}); 

app.listen(3000, function () {
  console.log('¡Puerto 3000 abierto!');
})
