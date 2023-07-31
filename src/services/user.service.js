export default class UsersService{
    constructor(dao){
        this.dao = dao;
    }

    getUsers = (params) =>{
        return this.dao.getUsers(params).lean();
    }

    getUserBy = (params)=>{
        return this.dao.findOne(params).lean();
    }

    createUser = (user)=>{
        return this.dao.create(user)
    }

    updateUser = (id, user) =>{
        return this.dao.findByIdAndUpdate(id, {$set: user})
    }

    deleteUser = (id) =>{
        return this.dao.findByIdAndDelete(id)
    }


};
