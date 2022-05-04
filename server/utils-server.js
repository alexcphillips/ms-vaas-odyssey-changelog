const { print } = require("../utils-common");

function handleIncomingRequest(url) {
  print("Incoming request URL: " + url);
}

function handleUnhandledRequest(url) {
  print("Unhandled request URL: " + url);
}

module.exports = {
  handleIncomingRequest,
  handleUnhandledRequest
};
