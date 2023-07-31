export const productErrorIncompleteValues = (product)=>{
    return `Uno o más parametros obligatorios no fueron proporcionados:
            Propiedades Obligatorias:
            * title: se esperaba una cadena definida y se recivió ${product.title},
            * price: se esperaba una cadena definida y se recivió ${product.price},
            * stock: se esperaba numero y se recivió ${product.stock} `
}