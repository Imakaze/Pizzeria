const redis = require("redis");
const client = redis.createClient({ return_buffers : true });


client.on('connect', function() {
    console.log('Redis conectado');
    });
    
    client.on('error', function (err) {
    console.log('Redis no está ejecutándose ' + err);
     });

class UserRepository{
    add(user){
        client.set(user.id, JSON.stringify(user),function(){
            console.log(arguments);
        });
    }
    
}
module.exports = UserRepository;