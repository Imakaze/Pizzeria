const User = require('../domain/user')
class UserService {
    register(dto) {
        return User.create(dto);
    }
}


module.exports =UserService

