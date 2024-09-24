const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Conectado a la base de datos "))
  .catch((error) => console.log(error));

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Escuchando el puerto: ${port}!`));
