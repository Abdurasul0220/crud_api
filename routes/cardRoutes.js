const Router = require('express');
const cardController = require('../controller/cardController');
const CardController = require('../controller/cardController');
const router = new Router();


router.post('/card', cardController.createCardUser)
router.get('/card', cardController.getCardByUser)

module.exports = router