
export default class ProductsService{
    constructor(dao){
        this.dao = dao;
    }

    getProducts =()=>{
       return this.dao.getProducts();
    }

    getProductById =(params)=>{
        return this.dao.getProductById(params);
    }

    createProduct =(product)=>{
        return this.dao.createProduct(product);
    }

    updateProduct = (id, product)=>{
        return this.dao.updateProduct(id,product)
    }

    deleteProduct = (id)=>{
        return this.dao.deleteProduct(id)
    }

}