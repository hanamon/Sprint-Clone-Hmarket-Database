const mysql = require('mysql');
const dotenv = require('dotenv');
const config = require('../config/config');
dotenv.config();

// MySQL 데이터베이스와 연동된 db 객체가 생성되었다.
const db = mysql.createConnection(
  // createConnection() 메소드는 객체를 입력 받는다.
  config['development']
);

// 커넥션에 오류가 있으면 err를 떨군다.
db.connect((err) => {
  if( err ) throw err;
});

module.exports = db;
