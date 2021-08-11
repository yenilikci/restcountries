const CountryModel = require("../models/countryModel");
const { result } = require("../utilities/result");
const createError = require("http-errors");

//all country data handling controller
const getAll = async (req, res, next) => {
  try {
    const countries = await CountryModel.getAll();
    const response = result(200, "data listing has been done", countries);
    res.status(200).json(response);
  } catch (error) {
    next(createError(400, e));
  }
};

//capital name handling controller
const getByCapitalName = async (req, res, next) => {
  try {
    const countries = await CountryModel.getByCapitalName(
      req.params.capitalName
    );
    const response = result(200, "data listing has been done", countries);
    res.status(200).json(response);
  } catch (error) {
    next(createError(400, e));
  }
};

module.exports = { getAll, getByCapitalName };
