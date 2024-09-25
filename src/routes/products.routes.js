const routerProduct = require("express").Router();
const productController = require("../controllers/productsControllers");

routerProduct.get("/", productController.getAllProducts);
routerProduct.get("/:id", productController.getProduct);
routerProduct.get("/search/:key", productController.searchProduct);
routerProduct.post("/", productController.createProduct);

module.exports = routerProduct;
