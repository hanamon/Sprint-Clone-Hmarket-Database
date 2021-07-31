// 필요한 모듈을 불러온다.
const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/users');
const itemsRouter = require('./routes/items');

// express 함수 실행을 통해 서버 객체(app)를 생성해서 서버를 구축한다.
// express 없을 때는 http.createServer()를 통해 서버를 구축한다.
const app = express();
const port = 3000;

// use() 미들웨어를 통해 모든 요청에 적용
app.use(cors()); // cors 기본이 모든 요청에 적용된다.
app.use(express.json()); // parser.json() 없이 express.json()을 통해 body에 들어온 payload의 json 데이터를 객체로 받을 수 있다.

// URL에 따라 Routing 한다.
app.use('/users', usersRouter);
app.use('/items', itemsRouter);

// 요청이 실제로 처리하려면 listen() 메서드가 서버 객체(app)에서 호출되어야 한다.
// listen() 메소드 첫 번째 인자에 서버가 사용하고자하는 포트번호를 전달한다.
// listen() 메소드 두 번째 인자에 콜백함수를 전달하면 서버 실행과 동시에 실행된다.
module.exports = app.listen(port, () => {
  console.log(`🚀 Server is starting on ${port}`);
});
