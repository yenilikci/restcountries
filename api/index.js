const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const routers = require("./src/routers/indexRouter");

const app = express();
const port = process.env.port || 5000;

/* middlewares */
//express apps by setting various HTTP headers
app.use(helmet());
//method,path,statusCode,ms,message
app.use(morgan("dev"));
//working with json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routers);

app.listen(port, () => {
  console.log(`api ${port} port numarası ile ayakta`);
});
module.exports = app;
