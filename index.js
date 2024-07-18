require("dotenv").config();
const dbConnect = require("./src/config/mongo");
const app = require("./src/app.js");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`--------------Server runnig on port: http://localhost:${PORT}`);
});

dbConnect();
