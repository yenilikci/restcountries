const routers = require("express").Router();

//include countryRouter
const countryRouter = require("./countryRouter");

routers.use("/v1/countries", countryRouter);

module.exports = routers;
