import { Router } from "express";
import { generateProduct } from "../../mocks/product.mocks.js";

const router = Router();

router.get("/mock", (req, res)=>{
    const products = [];
    // Generamos 100 usuarios de una vez con datos random 
    for(let i = 0; i<100; i++){
        products.push(generateProduct());
        }
        res.send({status: "succes", payload: products})
})

export default router