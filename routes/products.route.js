const { Router } = require("express");
const { productsController } = require("../controllers/products.controller");

const router = Router();

router.get("/products", productsController.getProducts);

router.get("/products/:id", productsController.getProductsid);

router.post("/products", productsController.createProducts);

router.delete("/products", productsController.deleteProductsid);

module.exports = router;
