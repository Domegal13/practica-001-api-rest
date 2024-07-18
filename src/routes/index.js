// const dbConnect = require("./src/config/mongo");
// require("dotenv").config();
// const cors = require("cors");
// const app = require("./src/app.js");
const express = require("express");
const fs = require("node:fs");
const router = require("express").Router();

const PAHT_ROUTES = __dirname;

const removeExtension = (fileName) => {
  return fileName.split(".").shift();
};

fs.readdirSync(PAHT_ROUTES).filter((file) => {
  const name = removeExtension(file); //*TODO - user,storages, tracks
  if (name !== "index") {
    console.log(`Cargando la ruta: ${name}`);
    router.use(`/${name}`, require(`./${file}`)); //*TODO - http://localhost:3000/api/tracks
  }
});

module.exports = router;
