import axios from "axios";
export default class CountryService {
  getAll() {
    return axios.get(
      "https://restcountries-api-yenilikci.herokuapp.com/api/v1/countries"
    );
  }
  getByCapitalName(capitalName) {
    return axios.get(
      "https://restcountries-api-yenilikci.herokuapp.com/api/v1/countries/" +
        capitalName
    );
  }
}
