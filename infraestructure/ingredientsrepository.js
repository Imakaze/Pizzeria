const redis = require("redis");
const client = redis.createClient();  

client.on('connect', function() {
    console.log('Redis conectado');
    });
    
    client.on('error', function (err) {
    console.log('Redis no está ejecutándose ' + err);
     });

class IngredientsRepository{
    add(user){
        client.set(user.id, JSON.stringify(user),function(){
            console.log(arguments);
        });
    }
    
}
module.exports = IngredientsRepository;