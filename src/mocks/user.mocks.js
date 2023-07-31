import {faker} from "@faker-js/faker/locale/es";
import { generateProduct } from "./product.mocks.js";

export const generateUser = ()=>{

    let numOfProducts = faker.number.int({min:0, max: 4})
    let products = []
    for(let i = 0; i<numOfProducts; i++){
        products.push(generateProduct())
    }

    const roles = ["cliente", "vendedor", "admin"]
      
    return{
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        sex: faker.person.sex(),
        birthDate: faker.date.birthdate(),
        id: faker.database.mongodbObjectId(),
        image: faker.image.avatar(),
        phone:faker.phone.number(),
        products,
        role:faker.helpers.arrayElement(roles ),
        premiun: faker.datatype.boolean()

    }
}