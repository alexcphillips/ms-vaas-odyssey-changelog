const app = require("./app");
const { print } = require("../utils-common");
let PORT = null;

(() => {
  try {
    if (process.env.NODE_ENV === "dev") {
      const getDefault = require("../config/default");
      PORT = getDefault.PORT();
    }

    app.listen(PORT, () => {
      print("Server started on port: " + PORT);
    });
  } catch (err) {
    print("Error starting server: " + err);
  }
})();
