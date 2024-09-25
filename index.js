const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

/* Rutas */
const routerProduct = require("./src/routes/products.routes");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Conectado a la base de datos "))
  .catch((error) => console.log(error));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/products", routerProduct);
app.listen(process.env.PORT || port, () =>
  console.log(`Escuchando el puerto: ${process.env.PORT}!`)
);

