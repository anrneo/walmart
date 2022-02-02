const discountsCtrl = {};
const Discounts = require('../models/Discounts');

discountsCtrl.getDiscounts = async (req, res) => {
    const discounts = await Discounts.find();
    res.json(discounts);
};



module.exports = discountsCtrl;