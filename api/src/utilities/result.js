//template for response
module.exports.result = (statusCode, message, data) => {
  return {
    statusCode,
    message,
    data,
  };
};
