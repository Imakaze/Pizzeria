const uuid = require('uuid');

class Image{

    constructor(buffer){
        this.id = uuid();
        this.buffer = this.buffer;
    }
    static create(buffer){
        return new Image(buffer)
    }
}

module.exports = Image;
