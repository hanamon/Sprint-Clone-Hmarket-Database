const db = require('../db');

module.exports = {
  get: (userId, callback) => {
    // 해당 유저의 모든 주문 정보를 조회해야한다.
    const queryString = `
    SELECT orders.id, orders.created_at, orders.total_price, items.name, items.price, items.image, order_items.order_quantity
    FROM orders
    INNER JOIN users ON orders.user_id = users.id
    LEFT JOIN order_items ON orders.id = order_items.order_id
    LEFT JOIN items ON order_items.item_id = items.id
    WHERE users.id = ${userId}
    `;
    
    db.query(queryString, (err, result) => {
      callback(err, result);
    });
  }
};
