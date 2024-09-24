const Product = require("../models/Products");

module.exports = {
  createProduct: async (req, res) => {
    const newProduct = await Product(req.body);

    try {
      await newProduct.save();
      res.status(200).json("Creación exitosa");
    } catch (error) {
      res.status(500).json("Creación Fallida");
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find().sort({ createdAt: -1 });
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json("Error al pedir la lista de los productos");
    }
  },

  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json("Error al pedir el producto");
    }
  },

  searchProduct: async (req, res) => {
    try {
      const result = await Product.aggregate([
        {
          $search: {
            index: "ecommerce",
            text: {
              query: req.params.key,
              path: {
                wildcard: "*",
              },
            },
          },
        },
      ]);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Error al buscar");
    }
  },
};
