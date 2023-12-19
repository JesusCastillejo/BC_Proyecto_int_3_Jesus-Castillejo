import { Schema, model } from "mongoose";

const productSchema = new Schema({

  nombre: { type: String, required: [true, "Nombre es requerido"], unique: true },

  precio: { type: Number, required: [true, "Precio es requerido"] },

  stock: { type: Number, required: [true, "Stock es requerido"] },

  marca: { type: String, required: [true, "marca es requerido"] },

  descripcion: {type: String, required: [true, "Descripcion es requerido"] },

  descripcion_Larga: { type: String, required: [true, "descripcion larga es requerido"] },

  categoria: { type: String, required: [true, "Categoria es requerido"] },

  foto: { type: String, required: [true, "foto es requerido"] },
});

const ProductModel = model("Product", productSchema);

export default ProductModel;