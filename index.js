let express = require("express");
let apiRoutes = require("./api-routes");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

let app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/resthub", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;
if (!db) console.log("error connencting db");
else console.log("db connected successfully");

var port = process.env.PORT || 8080;
app.get("/", (req, res) => res.send("Hello world from Express!!"));
app.use("/api", apiRoutes);
app.listen(port, function () {
  console.log("Running rest server on port", port);
});
