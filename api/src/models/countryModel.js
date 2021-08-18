const Countries = require("../data/restcountries.json");
//const { countryObject, newCountries } = require("../helpers/destructCountry");
const { includeCheck } = require("../helpers/includeCheck");

//get all country data
const getAll = () => {
  return new Promise((resolve, reject) => {
    const allCountries = Countries;
    resolve(allCountries);
  });
};

//get data by capital name
const getByCapitalName = (name) => {
  return new Promise((resolve, reject) => {
    const allCountries = Countries;
    let filteredData = allCountries.filter((data) => data.capital === name);
    if (filteredData.length == 0) {
      //if there is no exact match, see if it contains
      let includesData = includeCheck(allCountries, name);
      if (includesData.length == 0) {
        resolve([]);
      }
      resolve(includesData);
    } else {
      //exact match
      resolve(allCountries);
    }
  });
};

module.exports = { getAll, getByCapitalName };
