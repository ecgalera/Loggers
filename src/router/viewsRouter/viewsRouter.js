import {Router} from "express";
import productModel from "../../dao/mongodb/models/productModel.js";
// import CartsManager from "../../dao/mongodb/manager/cartManager.js";
// import ProductsManager from "../../dao/fs/mongodb/manager/productsManagers.js";
// import {cm} from "../../dao/index.js";
import {renderProduct, renderCart, renderCartById} from "../../controllers/viewsController/viewsController.js"


const router = Router();

// const productsManager = new ProductsManager();
//const cm = new CartsManager();

router.get("/", renderProduct);
// router.get("/realTimeProducts", async (req, res) => {
//   res.render("realTimeProducts", { css: "realTimeProducts" });
// });

router.get("/cart", renderCart);


router.get("/cart/:cid", renderCartById);

// router.get("/chat", async (req, res) => {
//   res.render("chat", { css: "chat" });
// });

// router.get("/register", async (req, res) => {
//   res.render("register", { css: "register" });
// });

// router.get("/login", async (req, res) => {
//   res.render("login", { css: "login" });
// });

export default router;