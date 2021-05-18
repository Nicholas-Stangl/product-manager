const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, "Title is required!"],
        minLength: [3, "Title name must be at least 3 chars"],
        maxLength: [1000, "Title name exceeds max length 1000 chars"]
    },

    price: {
        type: Number,
        required:[true, "Price point is required!"]
    },

    description:{
        type: String,
        required:[true, "Description is required!"],
        minLength: [3, "Description must be at least 3 chars"],
        maxLength: [1000, "Description exceeds max length 1000 chars"]
    }


}, {timestamps:true})


const Product = mongoose.model("Product", ProductSchema );

module.exports = Product;