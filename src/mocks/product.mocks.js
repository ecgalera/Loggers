import {faker} from "@faker-js/faker/locale/es";

export const generateProduct =()=>{
    return {
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        departament: faker.commerce.department(),
        stock: faker.number.int({min: 0, max: 20}),
        id: faker.database.mongodbObjectId(),
        code: faker.string.alphanumeric(10),
        price: faker.number.int({min: 100 , max: 5000})
    }
}