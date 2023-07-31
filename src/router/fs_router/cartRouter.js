import { Router } from "express";
// import CartsManager from "../../dao/fs/manager/CartManager.js";
// import ProductsManager from "../../dao/fs/manager/ProductManager.js";
import { getCartById, createCart, addProductsToCart } from "../../controllers/fs.controllers/cartController.js";


const router = Router();

export default router;

// const cartsManager = new CartsManager();
// const productsManager = new ProductsManager();

// const carts = cartsManager.getCarts();
// const products = productsManager.getProducts();

router.get(`/:cId`, getCartById);

router.post(`/`, createCart);

router.post(`/:cId/product/:pId`, addProductsToCart);




// router.put(`/:cId`, async (req, res) => { });

// router.delete("/:cId", async (req, res) => { });