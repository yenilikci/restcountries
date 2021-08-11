const router = require("express").Router();

//include countryController
const countryController = require("../controllers/countryController");

//route definitions
router.get("/", countryController.getAll);
router.get("/:capitalName", countryController.getByCapitalName);

module.exports = router;
