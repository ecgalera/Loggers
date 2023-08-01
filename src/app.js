import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
// import mongoose from "mongoose";
import config from "../config.js";
import cookieParser from "cookie-parser"
import initializePassportStrategies from "./config/passport.config.js";


import viewsRouter from "./router/viewsRouter/viewsRouter.js";
import productRouter from "./router/mongodb/productRouter.js";
import cartRouter from "./router/mongodb/cartRouter.js";
import ProductsRouter from "./router/fs_router/ProductRouter.js"
import cartsRouter from "./router/fs_router/cartRouter.js"
import SessionsRouter from "./router/mongodb/SessionsRouter.js";
import TicketRouter from "./router/mongodb/TicketRouter.js";
import UserRouter from "./router/mongodb/userRouter.js";
import usersMocksRouter from "./router/routerMocks/users.mocks.router.js";
import productsMocksRouter from "./router/routerMocks/products.mocks.router.js"
import loggers from "./router/logger.router.js"

import errorHandler from "./middleware/error.js"
import attachLogger from "./middleware/loggers.js";

const userRouter = new UserRouter()
const sessionsRouter = new SessionsRouter()
const ticketRouter = new TicketRouter()

const PORT = config.app.PORT;

const app = express();
// const connection = mongoose.connect(`${config.URL_DB.MONGO_URL}`)

app.use(cookieParser())

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

app.use(attachLogger);

app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({extended:true}));
initializePassportStrategies();


app.use("/", viewsRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/products", ProductsRouter);
app.use("/api/carts", cartsRouter);

app.use("/api/sessions",sessionsRouter.getRouter() )
app.use("/api/sessions", ticketRouter.getRouter())

app.use("/api/user", userRouter.getRouter())

// Mocks: Products  - Users
app.use("/api/users",usersMocksRouter)
app.use("/api", productsMocksRouter)

// Manejador de errores

app.use(errorHandler)

// Manejo de Loggers 
app.use("/logger", loggers)

app.listen(PORT, ()=>{
    console.log(`Listen in Port: ${PORT}`)
});





