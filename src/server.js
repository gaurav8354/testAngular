const express = require("express");
const app = express();
const path = require("path");
const forceSSL = function () {
  return function (req, res, next) {
    if (req.header["x-forwarded-proto"] != "https") {
      return res.redirect(["https://", req.get("Host"), req.url].join(""));
    }
    next();
  };
};
app.use(express.static(__dirname + "dist/MY-FIRST_APP"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "dist/MY-FIRST_APP/index.html"));
});
app.listen(4201);
