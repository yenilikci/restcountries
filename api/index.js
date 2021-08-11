const express = require("express");
const app = express();
const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`api ${port} port numarası ile ayakta`);
});
module.exports = app;
