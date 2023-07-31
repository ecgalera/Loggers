import BaseRouter from "./Router.js";
import { passportCall } from "../../services/auth.js";
import {getTicketController,getTicketByIdController, createTicketController, updateTicketController, deleteTicketControlller } from "../../controllers/mongo.controllers/ticketControllers.js";

export default class TicketRouter extends BaseRouter {
    init() {

        this.get("/ticket", ["AUTH"], passportCall('jwt', { strategyType: "locals" }), getTicketController)

        this.get("/ticket", ["AUTH"], passportCall('jwt', { strategyType: "locals" }), getTicketByIdController)

        this.post("/ticket", ["AUTH"], passportCall('jwt', { strategyType: "locals" }), createTicketController)

        this.put("/ticket", ["AUTH"], passportCall('jwt', { strategyType: "locals" }), getTicketByIdController)

        this.delete("/ticket", ["AUTH"], passportCall('jwt', { strategyType: "locals" }), createTicketController)

    }


}