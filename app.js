require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./src/config/mongo");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", require("./src/routes"));

app.listen(PORT, () => {
  dbConnect();
  console.log(`--------------Server runnig on port: http://localhost:${PORT}`);
});

// dbConnect();
