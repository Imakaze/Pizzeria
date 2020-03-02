const redis = require("redis");

class UserRepository{
    constructor(){
        this.client = redis.createClient();
    }
    add(user){
       this.client.set(user.id, JSON.stringify(user),function(){
            console.log(arguments);
        });
    }
    
}
module.exports = UserRepository