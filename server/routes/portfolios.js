
const express = require('express');
const router = express.Router();
const { getPortfolios ,getPortfoliosById,createPortfolio} = require('../controllers/portfolios');
const {checkJwt} = require('../controllers/auth')

router.get('', getPortfolios)
router.get('/:id', getPortfoliosById)
router.post('',checkJwt,createPortfolio)
module.exports = router;