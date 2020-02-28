const Ingredients = require('../domain/Ingredients')
const IngredientsRepository = require('../infraestructure/IngredientsRepository')
class IngredientsService {
    register(dto) {
        var Ingredients = Ingredients.create(dto);
        //grabar en redis
        var ingredientsRepository = new IngredientsRepository();
        ingredientsRepository.add(Ingredients);
        return {
            name:Ingredients.name,
            price:Ingredients.price
        }
    }
}
 
module.exports =IngredientsService
