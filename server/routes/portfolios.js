
const express = require('express');
const router = express.Router();
const { getPortfolios, getPortfoliosById, createPortfolio, updatePortfolio, deletePortfolio } = require('../controllers/portfolios');
const { checkJwt, checkRole } = require('../controllers/auth')

router.get('', getPortfolios)
router.get('/:id', getPortfoliosById)
router.post('', checkJwt, checkRole('admin'), createPortfolio)
router.patch('/:id', checkJwt, checkRole('admin'), updatePortfolio);
router.delete('/:id', checkJwt, checkRole('admin'), deletePortfolio);

module.exports = router;