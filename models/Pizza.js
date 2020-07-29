const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PizzaSchema = new Schema({
    name: String,
    toppings: [String],
    },
    {
    timestamps: true
    }
);

const Pizza = model("Pizza", PizzaSchema);
module.exports = Pizza;