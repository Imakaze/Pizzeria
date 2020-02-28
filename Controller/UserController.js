const { USERVALIDATOREQUIRE, USERVALIDATOLOGIN } = require('../validators/uservalidator')
const validator = require('../utils/validatormiddelware')
const UserService = require('../application/userservice');
 
class UserController {
  
  register(req, res) {
    const service = new UserService();
    let response = service.register(req.body);
    res.end(JSON.stringify(response));
  }
  login(req, res) {
    res.end('login ok');
  }
}
 
module.exports = function (app) {
  var userController = new UserController();
  app.post('/register', USERVALIDATOREQUIRE, validator, userController.register)
  app.post('/login', USERVALIDATOLOGIN, validator, userController.login)
}
