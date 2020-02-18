var express = require('express');
const bodyParser = require('body-parser');
//const userService = require('./application/userservice');
var app = express();
app.use(bodyParser.json())


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/register',  (req, res) => {
  var service = new userService();
  service.register(req.body);
  res.send('Hola, Ninfas');
}); 

app.get('/', function (req, res){
  res.send('¡Hola Ninfas! Estamos intentando arrancar todavía.')
})
app.post('/', function (req, res){
  console.log(req.body)
   res.send('Petición de Post realizada')
  })
  app.put('/', function (req, res){
    res.send('Petición de Put realizada')
  })
  app.delete('/', function (req, res){
    res.send('Petición de Borrar realizada')
  })

app.listen(3000, function () {
  console.log('¡Puerto 3000 abierto!');
})
