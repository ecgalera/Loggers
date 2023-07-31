export default class TokenDTO{
    constructor(user){
        this.name = user.name ,
        this.role = user.role,
        this.id = user.id
    }
}