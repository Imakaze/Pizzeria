class User{
    constructor(dto){
        this.name = dto.name;
        this.password=dto.password;
        this.email = dto.email;
    }
    static Create(dto){
        return new User(dto)
    }
}
export default User *from()
