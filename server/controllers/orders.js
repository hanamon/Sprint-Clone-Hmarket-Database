const models = require('../models');

module.exports = {
  get: (req, res) => {
    // 해당 유저의 모든 주문 정보를 조회해야한다.
    const userId = req.params.userId;
    if( ! userId ) {
      // 인증 오류
      res.status(401).send('Unauthorized user.');
    }
    else {
      models.orders.get(Number(userId), (err, result) => {
        if( err ) res.status(404).send('No orders found.');
        else res.status(200).json(result);
      });
    }
  }
};
