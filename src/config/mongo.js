require("dotenv").config();
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

const main = async () => {
  const URI = process.env.DB_URI;
  const client = new MongoClient(URI);

  try {
    await client.connect();
    // await listDatabases(client); //? Para listar las DB
    console.log("**** CONEXION EXITOSA ****");
  } catch (error) {
    console.log("**** ERROR DE CONEXION ****");
    console.error({ message: error.message });
  } finally {
    await client.close();
  }
};

main().catch(console.error);

const listDatabases = async (client) => {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
};

module.exports = main;

// const dbConnect = () => {
//   const DB_URI = process.env.DB_URI;
//   mongoose.connect(
//     DB_URI,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     },
//     (err, res) => {
//       if (!err) {
//         console.log("***** CONEXION CORRECTA *****");
//       } else {
//         console.log("***** ERROR DE CONEXION *****");
//       }
//     }
//   );
// };

// module.exports = dbConnect;
