const dotenv = require('dotenv');
// dotenv.config() 함수를 실행시켜서 process 환경변수 객체에 .env 파일에 있는 환경변수를 포함시킨다.
// process 는 Node.js에 내장된 객체로, 운영체제에 저장된 환경변수가 객체로 들어있다.
dotenv.config();

const config = {
  development: {
    host: 'localhost',
    user: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
  }
}

module.exports = config;
