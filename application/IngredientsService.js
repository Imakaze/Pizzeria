const Ingredient = require('../domain/Ingredients')
const IngredientsRepository = require('../infraestructure/IngredientsRepository')


class IngredientsService {
    addRange(ingredients) {        
        var ingredientsDomain = ingredients.map(i=>Ingredient.create(i));                       
        var ingredientsRepository= new IngredientsRepository();
        ingredientsRepository.addRange(ingredients);
    }
}
module.exports = IngredientsService

