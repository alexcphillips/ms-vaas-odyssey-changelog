const defaultValues = require("./default.json");

class getDefault {
  static PORT() {
    return defaultValues.PORT;
  }
}

module.exports = getDefault;
