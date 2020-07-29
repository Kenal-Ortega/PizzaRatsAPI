const express = require("express");
const PizzaRouter = express.Router();
const { index, create, update, destroy } = require("../controllers/Pizza.js");

//create routes
//get 
PizzaRouter.get("/", index);

//create
PizzaRouter.post("/", create);

//update
PizzaRouter.put("/:id", update);

//delete
PizzaRouter.delete("/:id", destroy);

module.exports = PizzaRouter;
