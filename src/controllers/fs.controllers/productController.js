import { productService } from "../../services/repository/index.js";




export const getProducts = async (req, res) => {
    const allProducts = await productService.getProducts();
    const cantidadDeProductos = req.query.limit;
    if (cantidadDeProductos) {
        const reduced = allProducts.slice(0, cantidadDeProductos);
        res.send(reduced);
    } else {
        res.send(allProducts);
    }
}

export const getProductById = async (req, res) => {
    try {
        const idProduct = req.params.pId;
        const allProducts = await productService.getProducts();
        const selected = allProducts.find((p) => p.id == idProduct);
        productService.getElementById(idProduct);
        res.send({ status: "succes", message: "product get" });
    } catch (error) {
        res.status(404).send({ status: "error", error: "not found" });
    }
}

export const createProduct = async (req, res) => {
    try {
        const newContent = req.body;
        productService.createProduct(newContent);
        res.send({ status: "succes", message: "product posted" });
    } catch (error) {
        res.status(404).send({ status: "error", error: "not found" });
        console.log(error);
    }
}


export const updateProduct = async (req, res) => {
    const allProducts = await productService.getProducts();
    const id = req.params.pId;
    const newContent = req.body;
    const productIndex = allProducts.findIndex((p) => p.id == id);
    if (productIndex === -1) {
        return res.status(404).send({ status: "error", error: "not found" });
    }
    allProducts[productIndex] = newContent;
    productService.updateProduct(id, newContent);
    res.send({ status: "succes", message: "product updated" });
}

export const deleteProduct = async (req, res) => {
    const pid = req.params.pid;
    // const allProducts = await productService.getProducts();
    // const productIndex = allProducts.findIndex(p => p.id == pid);
    // if (productIndex === -1) {
    //     return res.status(404).send({ status: "error", error: "not found" });
    // }
    // allProducts.splice(productIndex, 1)
    await productService.deleteProduct(pid);
    res.send({ status: "succes", message: "product deleted" });
}

