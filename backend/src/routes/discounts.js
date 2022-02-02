const { Router } = require('express');
const router = Router();

const { getDiscounts } = require('../controllers/discounts.controller');

router.route('/')
    .get(getDiscounts);



module.exports = router;
