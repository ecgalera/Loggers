import ErrorService from "../../services/ErrorServices.js";
import { productService } from "../../services/repository/index.js";
import { productErrorIncompleteValues } from "../../constants/usersErrors.js";
import EError from "../../constants/EErrors.js";




export const getProducts = async (req, res) => {

    try {
        const products = await productService.getProducts();
        if (products.length == 0) {
            res.send({ message: "no hay productos cargados" })
        } else {
            res.send({ status: "success", payload: products })
        }
    } catch (error) {
        console.log("Producto no encontrado")
    }
}

export const createProduct = async (req, res) => {
    try {
        const { title, description, price, category, code, status, stock } = req.body;
        if (!title || !price || !code || !status || !stock) {
            // return res.send({ status: "error", error: "datos incompletos" });
            // Genero un error: Este error es para el servidor
            ErrorService.createError({
                name: "Error de creación de producto",
                cause: productErrorIncompleteValues({ title, price, code, status, stock }),
                message: "Error itentando insertar un nuevo Producto",
                code: EError.INCOMPLETE_VALUES
            })
        }
        // return res.send({ status: "error", error: "datos incompletos" });
        const product = {
            title,
            description,
            price,
            category,
            code,
            status,
            stock
        };
        const createProduct = await productService.createProduct(product);
        res.send({ status: "success", message: "Producto Creado" })
    } catch (error) {
       console.log(error)
       return  res.send(error)
    }

}



export const getProductById = async (req, res) => {

    try {
        const { pid } = req.params;
        const producById = await productService.getProductById({ _id: pid });
        res.send({ status: "success", payload: producById });
    } catch (error) {
        console.log("error en el id")
    }
}

export const updateProduct = async (req, res) => {
    try {

        const { pid } = req.params;
        const product = req.body;
        const productUpdate = await productService.updateProduct(pid, product);
        res.send({ status: "success", payload: productUpdate });

    } catch (error) {
        console.log("Product no actualizado")
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { pid } = req.params;
        const productDelete = await productService.deleteProduct(pid)
        res.send({ status: "success", payload: productDelete })

    } catch (error) {
        console.log("Producto no eliminado")
    }
};



