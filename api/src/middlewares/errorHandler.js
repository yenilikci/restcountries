const { result } = require("../utilities/result");

//error checking middleware
const errorHandler = (err, req, res) => {
  const response = result(err.statusCode, err, err.message);
  res.json(response);
};

module.export = errorHandler;
