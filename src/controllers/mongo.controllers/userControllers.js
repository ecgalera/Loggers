import { userService } from "../../services/repository/index.js";


const getUser = async (req, res) => {

    const users = await userService.getUsers();
    return res.sendSuccess(users)

}



export default {
    getUser,
}