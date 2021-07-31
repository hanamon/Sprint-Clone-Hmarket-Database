const db = require('../db');

module.exports = {
  get: (callback) => {
    const queryString = `SELECT * FROM users`;
    
    db.query(queryString, (err, result) => {
      if( err ) throw err;
      callback(err, result);
    });
  }
};
