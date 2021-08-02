const db = require('../db');

module.exports = {
  getAll: (callback) => {
    const queryString = `SELECT * FROM items`;
    
    db.query(queryString, (err, result) => {
      if( err ) throw err;
      callback(err, result);
    });
  }
};
