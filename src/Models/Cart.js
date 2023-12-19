import { Schema, model } from "mongoose";

const cartSchema = new Schema({

    nombre: {
        type: String,
        required: [true, "Username is required"],
    },

    precio: {
        type: Array,
        required: [true, "Products is required"],
    },

    total: {
        type: Number,
        required: [true, "Total es requerido"],
    },

    foto: {
        type: String, 
        required: [true, "foto es requerido"]
    },

});

const CartModel = model("Cart", cartSchema);

export default CartModel;