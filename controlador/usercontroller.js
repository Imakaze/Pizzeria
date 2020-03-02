const { USERVALIDATOREQUIRE, USERVALIDATOLOGIN } = require('../validators/uservalidator')
const validator = require('../utils/validatormiddelware')
const UserService = require('../application/userservice');

class UserController {
  
  static register(req, res) {
    const service = new UserService();
    let response = service.register(req.body);
    res.end(JSON.stringify(response));
  }
  static login(req, res) {
    res.end('login ok');
  }
}

module.exports = function (app) {
  app.post('/register', USERVALIDATOREQUIRE, validator, UserController.register)
  app.post('/login', USERVALIDATOLOGIN, validator, UserController.login)
}