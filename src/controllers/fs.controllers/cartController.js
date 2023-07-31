// import { cartService, productService } from "../../services/index.js"

// import { addProductToCart } from "../mongo.controllers/cartControllers.js";


export const getCartById = async (req, res) => {
    try {
        const idCart = req.params.cId;
        const allCarts = await cartService.getCarts();
        const selected = allCarts.find((c) => c.id == idCart);
        res.send(selected);
    } catch (error) {
        console.log(error);
        return res.status(404).send({ status: "error", error: "not found" });
    }
}


export const createCart = async (req, res) => {
    try {
        cartService.createCart();
        res.send("cart created");
    } catch (error) {
        console.log(error);
        return res.status(404).send({ status: "error", error: "cart not created" });
    }
}

export const addProductsToCart = async (req, res) => {
    const allCarts = await cartService.getCarts();
    const idCart = req.params.cId;
    const CartExist = allCarts.find((c) => c.id == idCart);
    if (!CartExist) {
        return res.status(404).send({ status: "error", error: "cart not found" });
    }
    const idProduct = req.params.pId;
    let quantity = req.body.quantity;
    quantity ? (quantity = quantity) : (quantity = 1);
    const allProducts = await productService.getProducts();
    const productSelected = allProducts.find((p) => p.id == idProduct);
    productSelected
        ? res.send({ status: "succes ", code: "Product and Cart found" })
        : res.send("product not found");
    const productSelectedId = productSelected.id;
    const cartToSend = {
        product: productSelectedId,
        quantity: quantity,
    };
    cartService.addProductToCart(idCart, cartToSend);
}