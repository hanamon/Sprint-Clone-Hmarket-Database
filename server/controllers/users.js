const models = require('../models');

module.exports = {
  getAll: (req, res) => {
    // 500 응답은 서버 오류 시 자동으로 전달된다.
    models.users.getAll((err, result) => {
      if( err ) res.status(404).send('Not found!');
      else res.status(200).json(result);
    });
  },
  getCurrent: (req, res) => {
    const { userId } = req.params;
    // userId 가 Null 이나 undefined 로 들어올 수가 있다.
    if( ! userId ) {
      return res.status(401).send('Unauthorized user.');
    }
    else {
      models.users.getCurrent(userId, (err, result) => {
        if( err || ! result ) res.status(404).send('Not found!');
        else res.status(200).json(result);
      });
    }
  },
  getCurrentOrders: (req, res) => {
    const { userId } = req.params;
    // userId 가 Null 이나 undefined 로 들어올 수가 있다.
    if( ! userId ) {
      return res.status(401).send('Unauthorized user.');
    }
    else {
      models.users.getCurrentOrders(userId, (err, result) => {
        if( err || ! result ) res.status(404).send('Not found!');
        else res.status(200).json(result);
      });
    }
  }
};
