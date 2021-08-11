//includes a string value check
module.exports.includeCheck = (data, capitalName) => {
  let filteredData = data.filter((d) =>
    d.capital
      .toLowerCase()
      .toString()
      .includes(capitalName.toLowerCase().toString())
  );
  return filteredData;
};
