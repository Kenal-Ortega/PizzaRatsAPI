const express = require("express");
const RatRouter = express.Router();
const {index, create, update, destroy} = require("../controllers/Rat.js");
const Rat = require("../models/Rat.js");

//routes and middleware
//get all rats
RatRouter.get("/", index);
//create new rats
RatRouter.post("/", create);
//update rats by id
RatRouter.put("/:id", update);
//delete rats by id
RatRouter.delete("/:id", destroy);

module.exports = RatRouter