# hmarket-database 구현하기 (cmarket-database 스프린트 클론 코딩)
- 클라이언트와 서버 그리고 데이터베이스까지 3tier 아키텍처를 구현한다.  
- 프로젝트는 Node.js 기반으로 클라이언트와 서버를 구현한다.  
- 데이터베이스는 관계형 데이터베이스인 MySQL을 이용한다.
- 클라이언트는 React.js로 구현한다.
- 서버는 Node.js 프레임워크인 MySQL을 이용한다.
- MySQL 서버에 구현한다.

## 구현 URL
- 전체 유저 조회  
  `/users`
- 해당 유저의 전체 주문 내역 조회  
  `/users/:userId/orders`

## Step 1. hmarket 데이터베이스 생성하기
1. 로컬 MySQL에 hmarket 데이터베이스를 생성한다.  
  `create database hmarket;`
2. MySQL에 접속한 상태에서 hmarket을 사용한다.  
  `use hmarket;`
3. cmarket 스키마 디자인 그대로 테이블을 생성한다. (schema.sql 그대로 쿼리를 날린다.)
4. cmarket seed 데이터 그대로 테이블에 데이터를 추가한다. (seed.sql 그래로 쿼리를 날린다.)

## Step 2. hmarket 프로젝트 생성하기
1. 프로젝트 폴더를 생성한다. (hmarket-database)
2. server 와 client 폴더를 생성한다.

## Step 3. hmarket 프로젝트 서버 구현하기
1. server 폴더를 Node.js 패키지를 생성한다. (package.json 파일이 생성되면 성공)  
  `npm init -y`
2. server 에 필요한 Node.js 모듈을 다운 받는다. (package.json 파일안에 dependencies 필드에 다운받은 모둘 확인)
  - express : Node.js 서버 프레임워크  
    `npm install express`
  - cors : express 의 미들웨어로 사용  
    서버쪽에서 클라이언트를 대상으로 리소스의 허용 여부를 결정하는 코드를 간단하게 구현 가능  
    `npm install cors`
  - dotenv : Node.js 에서 .env를 통해 영구적으로 적용된 환경변수 사용 가능  
    환경변수를 이용해서 (개발, 테스트, 제품) 환경을 구분하여 코드를 작성할 수 있다.  
    `npm install dotenv`
  - mysql : Node.js 프로젝트와 MySQL 데이터베이스를 연동  
    mysql 노드 모듈을 이용해서 Node.js 에 DB를 연동하고 쿼리를 날릴 수 있다.  
    `npm install mysql`
  - nodemon : Node.js 에서 파일이 수정되면 열려있는 서버를 닫고 다시 start 해야한다.  
    이는 개발 시 번거롭기 때문에 nodemon 모듈을 이용해서 파일 변경이 있으면 자동으로 서버를 닫고 다시 실행하게 할 수 있다.  
    `npm install nodemon`
3. .env 파일 생성 및 환경 변수 설정
  - server > .env 파일 생성
  - .env 에 환경 변수 설정
    - DATABASE_USERNAME='아이디'
    - DATABASE_PASSWORD='비밀번호'
    - DATABASE_NAME='데이터베이스명'
4. server > app.js 파일 생성 및 웹 서버 구축 (초기화)
  - app.js 파일을 생성한다.
  - express, cors 모듈만 불러와서 기본적인 서버를 구축한다.
5. server > package.json - "scripts" 필드에 "start" 스크립트 추가  
  `"start": "nodemon --inspect app.js"`
6. 서버를 실행시키고 정상 작동 되는지 확인한다.  
  `npm start`  
  브라우저를 통해 localhost:포트번호 에 접속 후 "Cannot GET /"이 확인 된다면 성공
7. MySQL 데이터베이스와 연동하기
  - config > config.js 생성  
    .env를 이용한 환경에 따른 데이터베이스 연동위한 config 세팅
  - db > index.js 생성  
    Node.js 와 MySQL 연동  
    `mysql.createConnection()`로 생성한 변수를 이용해서 데이터베이스에 쿼리를 날릴 수 있다.
8. 라우팅: 메소드와 URL에 따라 분기(Routing)한다.
  - routes 폴더 > users.js, items.js 생성  
    `controllers > index.js 호출`
  - controllers 폴더 > orders.js, items.js 생성  
    `models > 해당 model 호출`
  - models 폴더 > orders.js, items.js 생성
    `db > index.js 호출`