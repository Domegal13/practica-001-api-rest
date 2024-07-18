const express = require("express");
const cors = require("cors");
// const dbConnect = require("../src/config/mongo");
const app = express();
app.use(cors());
app.use(express.json());
// const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(
    "<h1> ---------   Inicio Proyecto de Prueba 001  ------------- </h1>"
  );
});

// dbConnect();

module.exports = app;
