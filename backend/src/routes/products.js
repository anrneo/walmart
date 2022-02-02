const { Router } = require('express');
const router = Router();

const { getProducts , searchBrand} = require('../controllers/products.controller');

router.route('/')
    .get(getProducts)
    router.route('/brands')
    .get(searchBrand)
    

module.exports = router;


