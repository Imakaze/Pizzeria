const uuid = require('uuid');
const crypto = require('crypto');
 
class User{
    constructor(dto){
        this.id = uuid()
        this.name = dto.name;
        this.password=this._encryptPassWord(dto.password);
        this.email = dto.email;
        
    }
    _encryptPassWord(password){
        return crypto.createHash('sha256').update(password).digest('base64');
    }
    static create(dto){
        return new User(dto)
    }
}
module.exports =User;
