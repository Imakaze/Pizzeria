const redis = require("redis");
const client = redis.createClient();
 
 
class UserRepository{
    add(user){
        client.set(user.id, JSON.stringify(user),function(){
            console.log(arguments);
        });
    }
}
module.exports = UserRepository