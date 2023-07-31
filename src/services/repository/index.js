
import PersistenceFactoryUsers from "../../dao/UsersFactory.js";
import PersistenceFactoryProduct from "../../dao/ProductFactory.js";
import PersistenceFactoryCart from "../../dao/CartFactory.js";
import PersistenceFactoryTicket from "../../dao/TicketFactory.js"

import UserRepository from "../user.service.js";
import ProductsRepositoy from "../product.service.js";
import CartRepository from "../cart.service.js";
import TicketRepository from "../ticket.service.js";

const userDao = await PersistenceFactoryUsers.getPersistence();
const productDao = await PersistenceFactoryProduct.getPersistence();
const cartDao = await PersistenceFactoryCart.getPersistence();
const ticketDao = await PersistenceFactoryTicket.getPersistence();
// console.log(userDao);

export const userService = new UserRepository(userDao);
export const productService = new ProductsRepositoy(productDao);
export const cartService = new CartRepository(cartDao);
export const ticketService = new TicketRepository(ticketDao)
// console.log(cartService)




