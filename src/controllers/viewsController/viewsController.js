import productModel from "../../dao/mongodb/models/productModel.js";
import { cartService } from "../../services/repository/index.js";

export const renderProduct = async (req, res) => {
    const { page = 1 } = req.query;
    let { limit = 5, sort = 1 } = req.query;

    //   if (req.query.limit) {
    //     req.session.limit = req.query.limit;
    //   } else if (req.session.limit) {
    //     limit = req.session.limit;
    //   }
    //   if (req.query.sort) {
    //     req.session.sort = req.query.sort;
    //   } else if (req.session.sort) {
    //     sort = req.session.sort;
    //   }

    const options = {
        page,
        limit: parseInt(limit),
        lean: true,
        sort: { price: sort },
    };

    const { docs, hasPrevPage, hasNextPage, prevPage, nextPage, ...rest } =
        await productModel.paginate({}, options);

    // const result = await productModel.paginate({}, { limit: 3, lean: true });
    // console.log(result);
    const products = docs;

    res.render("home", {
        // user: req.session.user,
        products,
        page: rest.page,
        hasPrevPage,
        hasNextPage,
        prevPage,
        nextPage,
        css: "products",
    });
}

export const renderCart = async (req, res) => {
    const carts = await cartService.getCarts();
    res.render("cart", { carts, css: "cart" });
}

export const renderCartById = async (req, res) => {
    const cid = req.params.cid;
    const carts = await cartService.getCarts();
    const cartSelected = carts.find((cart) => cart._id == cid);
    res.render("oneCart", { cartSelected, css: "cart" });
};




