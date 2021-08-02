const router = require('express').Router();
const controllers = require('../controllers');

// 전체 회원 정보 조회
router.get('/', controllers.users.getAll);

// 특정 ID 회원 정보 조회
router.get('/:userId', controllers.users.getCurrent);

// 특정 ID 회원 전체 주문 내역 조회
router.get('/:userId/orders', controllers.users.getCurrentOrders);

module.exports = router;
