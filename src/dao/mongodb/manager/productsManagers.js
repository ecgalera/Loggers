import productModel from "../models/productModel.js";

export default class ProductManager {

  getProducts = async () => {
    return productModel.find().lean();
  };

  getProductById = (pid) => {
    return productModel.findOne({_id:pid}).lean();
  };

  createProduct = (product) => {
    return productModel.create(product);
  };

  updateProduct = (id, product) => {
    return productModel.findByIdAndUpdate(id, { $set: product });
  };


  deleteProduct = (pid) =>{
    return productModel.findByIdAndDelete(pid);
  }
}