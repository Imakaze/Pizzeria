const { USERVALIDATORREGISTER, USERVALIDATORLOGIN } = require('../validators/uservalidators')
const validator = require('../util/validatormiddelware')
class UserController {
    static register(req, res) {
        var service = new UserService();
        let response = service.register(req.body);
        res.end(JSON.stringify(response));
    }
    static login(req, res) {
        var service = new UserService();
        //service.login()
        res.end("ok login");
    }
}

module.exports = function (app) {
    app.post('/register', USERVALIDATORREGISTER, validator, UserController.register)
    app.post('/login', USERVALIDATORLOGIN, validator, UserController.login)
}