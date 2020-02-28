const redis = require("redis");
const client = redis.createClient();
 
 
class IngredientsRepository{
    add(Ingredients){
        client.set(Ingredients.id, JSON.stringify(Ingredients),function(){
            console.log(arguments);
        });
    }
}
module.exports = IngredientsRepository