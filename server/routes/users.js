const router = require('express').Router();
const controllers = require('../controllers');

// 전체 유저 정보 조회
router.get('/', controllers.users.get);

// 해당 유저의 전체 주문 내역을 조회한다.
router.get('/:userId/orders', controllers.orders.get);

module.exports = router;
