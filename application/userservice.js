const User = require('../domain/user')
class UserService {
    register(dto) {
        var user = User.create(dto);
        //grabar en redis
        return {
            name:user.name,
            email:user.email
        }
    }
}

module.exports =UserService