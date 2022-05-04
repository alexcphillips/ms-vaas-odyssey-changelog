const express = require("express");
const routes = require("./routes");
const {
  handleIncomingRequest,
  handleUnhandledRequest
} = require("./utils-server");

const app = express();

app.use((req, res, next) => {
  handleIncomingRequest(req.url);
  next();
});

app.use(express.json());
app.use(routes);

app.use((req, res, next) => {
  handleUnhandledRequest(req.url);
  next();
});

module.exports = app;
