class User{
    constructor(dto){
        this.name = dto.name;
        this.password=dto.password;
        this.email = dto.email;
    }
    static create(dto){
        return new User(dto)
    }
}
module.exports =User;
