const uuid = require('uuid');
 
class Ingredients{
    constructor(dto){
        this.id = uuid()
        this.name = dto.name;
        this.price = dto.price;        
    }

    static create(dto){
        return new Ingredients(dto)
    }
}
module.exports = Ingredients;