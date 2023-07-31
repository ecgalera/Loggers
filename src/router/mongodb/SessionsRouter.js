import { generateToken, passportCall } from "../../services/auth.js"
import BaseRouter from "./Router.js"
import TokenDTO from "../../dtos/user/TokenDTO.js";
import {createProduct, deleteProduct, updateProduct} from "../../controllers/mongo.controllers/productControllers.js"

export default class SessionsRouter extends BaseRouter{

    init(){

        this.post("/register",["NO_AUTH"], passportCall("register",{strategyType: "locals"}), (req, res)=>{
            res.sendSuccess()
        });

        this.post("/login", ["NO_AUTH"], passportCall("login",{strategyType: "locals"}), (req, res)=>{
            const token = generateToken(req.user);
            res.cookie("authToken", token, {
                maxAge:1000*3600*24,
                httpOnly:true
            }).sendSuccess("Logged In")
            
        });
        

        this.get('/logout', ['AUTH'], (req, res) => {

            try {
                return res.clearCookie('authToken').sendSuccess('logged out successfully')
            } catch (error) {
                return res.sendInternalError(error);
            }
        })


        this.get('/current', ['AUTH'], passportCall('jwt', { strategyType: "locals" }), (req, res) => {
            try {
                const user = req.user
                console.log(user)
                const userTDO = new TokenDTO(user)

                return res.sendSuccess(userTDO);

            } catch (error) {
                return res.sendInternalError(error);
            }


        });

        this.post('/product', ['ADMIN'], passportCall('jwt', { strategyType: "locals" }), createProduct
        , (req, res) => {
            try {
               

            } catch (error) {
                return res.sendInternalError(error);
            }

            
        }
        );

        this.delete('/product/:pid', ['ADMIN'], passportCall('jwt', { strategyType: "locals" }), deleteProduct, (req, res) => {
            try {
               

            } catch (error) {
                return res.sendInternalError(error);
            }

            
        });
        this.put('/product/:pid', ['ADMIN'], passportCall('jwt', { strategyType: "locals" }), updateProduct, (req, res) => {
            try {
               

            } catch (error) {
                return res.sendInternalError(error);
            }

            
        });


    }
};
