import { passportCall } from "../../services/auth.js";
import usersService from "../../controllers/mongo.controllers/userControllers.js"
import BaseRouter from "./Router.js";

export default class UserRouter extends BaseRouter {
    init() {

        this.get("/", ["AUTH"], passportCall('jwt', { strategyType: "locals" }), usersService.getUser, (req, res) => {
            try {


            } catch (error) {
                return res.sendInternalError(error);
            }


        })

    }
}