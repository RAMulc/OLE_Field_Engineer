const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require("./routes");

require('dotenv').config()

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



// Routes
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ptaSystemDesign");

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
