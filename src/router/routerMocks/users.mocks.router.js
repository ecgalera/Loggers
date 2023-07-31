import { Router } from "express";
import { generateUser } from "../../mocks/user.mocks.js";

const router = Router();

router.get("/mock", (req, res)=>{
    const users = [];
    // Generamos 100 usuarios de una vez con datos random 
    for(let i = 0; i<100; i++){
        users.push(generateUser());
        }
        res.send({status: "succes", payload: users})
})

export default router