import mongoose from "mongoose";

const collection = "Users";

const schema = new mongoose.Schema({
    
    name: String,

    email: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },

    role: {
        type: String,
        default: "User"
    },
    password: String,

    cart: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Cart"
    }

},
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const userModel = mongoose.model(collection, schema);

export default userModel;
