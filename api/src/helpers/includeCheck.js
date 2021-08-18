//includes a string value check
module.exports.includeCheck = (data, capitalName) => {
  let filteredData = data.filter(
    (d) =>
      d.capital
        .toLocaleLowerCase("tr") //toLowerCase => toLocaleLowerCase("tr")
        .toString()
        .includes(capitalName.toLocaleLowerCase("tr").toString()) //toLowerCase => toLocaleLowerCase("tr")
  );
  return filteredData;
};
