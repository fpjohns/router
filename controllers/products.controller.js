module.exports.productsController = {
  getProducts: (req, res) => {res.json('житель хочет банан')},

  getProductsid: (req, res) => {res.json(`банан с  ID ${req.params.id} добавлен`)},

  createProducts: (req, res) => {res.json('банан создан')},

  deleteProductsid: (req, res) => {res.json(`банан с ID ${req.params.id} удален`)},
};
    