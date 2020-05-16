const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_94kj8xbs:r0qt08ir6sq7vikk20vo6a52ik@ds141704.mlab.com:41704/heroku_94kj8xbs");

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});