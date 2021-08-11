const CountryModel = require("../models/countryModel");

//all country data handling controller
const getAll = async (req, res, next) => {
    res.send("getAll");
};

//capital name handling controller
const getByCapitalName = async (req, res, next) => {
    res.send("getByCapitalName");
};

module.exports = { getAll, getByCapitalName };
