const db = require('../db');

module.exports = {
  getAll: (callback) => {
    const queryString = `SELECT * FROM users`;
    
    db.query(queryString, (err, result) => {
      if( err ) throw err;
      callback(err, result);
    });
  },
  getCurrent: (userId, callback) => {
    const queryString = `SELECT * FROM users WHERE id = ?`;
    const params = [userId];

    db.query(queryString, params, (err, result) => {
      if( err || result.length === 0 ) callback(err, null);
      else callback(null, result);
    });
  },
  getCurrentOrders: async (userId, callback) => {
    const queryUserId = `
    SELECT *
    FROM users
    WHERE id = ?
    `;
    const queryString = `
    SELECT *
    FROM orders
    INNER JOIN users ON orders.user_id = users.id
    LEFT JOIN order_items ON orders.id = order_items.order_id
    LEFT JOIN items ON order_items.item_id = items.id
    WHERE users.id = ?
    `;
    const params = [userId];

    db.query(queryUserId, params, (err, result) => {
      // userId 가 존재하지 않는 경우 Not Found
      // userId 가 존재하지만 주문이 빈 경우 ok
      if( err || result.length === 0 ) callback(err, null);
      else {
        db.query(queryString, params, (err, result) => {
          if( err ) callback(err, null);
          else callback(null, result);
        });
      }
    });
  }
};
