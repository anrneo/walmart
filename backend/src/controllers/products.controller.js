const productsCtrl = {};

const Products = require('../models/Products');



productsCtrl.getProducts = async (req, res) => {
    const products = await Products.find();
    res.json(products);
};

productsCtrl.searchBrand = async (req, res) => {
    const products = await Products.find({brand:req.query.brand});
    res.json(products);
};



module.exports = productsCtrl;