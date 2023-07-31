import mongoose from "mongoose";
import userModel from "../models/userModel.js"

const collection = "Ticket";

const schema = new mongoose.Schema({

    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Users",
    },

    code: {
        type: String,
        unique: true
    },

    amount: Number, // suma total de la compra

    purchaser: String, // correo del usuario asociado al carrito

    count: {
        type: Number,
        default: 0,
    }

},

    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }

)



const ticketModel = mongoose.model(collection, schema);

export default ticketModel;


















