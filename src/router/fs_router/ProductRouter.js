import { Router } from "express";
import { getProducts, getProductById, updateProduct, deleteProduct, createProduct} from "../../controllers/fs.controllers/productController.js"


const router = Router();

export default router;

// const productsManager = new ProductsManager();

// const products = productsManager.getProducts();

router.get(`/`, getProducts );

router.get(`/:pId`, getProductById);

router.post(`/`, createProduct);

router.put(`/:pId`,updateProduct);

router.delete("/:pId", deleteProduct);