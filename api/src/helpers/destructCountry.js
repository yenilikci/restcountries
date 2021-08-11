//destructed country object
module.exports.countryObject = {
  numericCode: 0,
  name: "",
  capital: "",
  region: "",
  flag: "",
};

//destructed country arrays
module.exports.newCountries = (array, object) => {
  const newCountries = [];
  array.map((country) => {
    object = {};
    object.numericCode = country.numericCode;
    object.name = country.name;
    object.capital = country.capital;
    object.region = country.region;
    object.flag = country.flag;
    newCountries.push(object);
  });
  return newCountries;
};
