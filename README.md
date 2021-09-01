# Hmarket Database 구현하기 - 스프린트 클론 코딩 🐑

## ❗️ 구현하는 것 & 구현하지 않는 것

### 여기에서 구현하는 것
- 클라이언트와 서버 그리고 데이터베이스까지 3tier 아키텍처를 구현한다.  
- 프로젝트는 Node.js 기반으로 클라이언트와 서버, 그리고 관계형 데이터베이스 스키마를 구현한다.  
- 클라이언트는 React.js를 사용한다.
- 서버는 Node.js 프레임워크인 Express를 사용한다.
- 데이터베이스는 RDBMS인 MySQL을 시용한다.

#### 클라이언트측 구현 페이지
1. 전체 상품 페이지
2. 현재 회원의 장바구니 페이지
3. 현재 회원의 주문 내역 페이지

#### 서버측 구현 API
1. `/users`
  - 전체 회원 정보 조회 `/`
  - 특정 ID 회원 정보 조회 `/:userId`
  - 특정 ID 회원 전체 주문 내역 조회 `/:userId/orders`
2. `/items`
  - 전체 아이템 조회 `/`

#### 데이터베이스측 구현 스키마
1. users 테이블
2. items 테이블
3. orders 테이블
4. user_items 테이블

### 여기에서 구현하지 않는 것
- ORM Sequelize
- 인증/보안
- HTTPS
- 쿠키/해시/세션
- 토큰기반 인증 (Token-based Authentication)

## ❗️ 구현 방법

### Step 1. Hmarket 데이터베이스 생성하기
1. 로컬 MySQL에 hmarket 데이터베이스를 생성한다.  
  `create database hmarket;`
2. MySQL에 접속한 상태에서 hmarket을 사용한다.  
  `use hmarket;`
3. cmarket 스키마 디자인 그대로 테이블을 생성한다. (schema.sql 그대로 쿼리를 날린다.)
4. cmarket seed 데이터 그대로 테이블에 데이터를 추가한다. (seed.sql 그래로 쿼리를 날린다.)

### Step 2. Hmarket 프로젝트 생성하기
1. 프로젝트 폴더를 생성한다.
  `mkdir hmarket-database`

### Step 3. Hmarket 프로젝트 서버 구현하기
1. server 폴더를 생성한다.
  `mkdir server`
2. server 폴더를 Node.js 패키지를 생성한다. (package.json 파일이 생성되면 성공)  
  `npm init -y`
3. server 에 필요한 Node.js 모듈을 다운 받는다. (package.json 파일안에 dependencies 필드에 다운받은 모듈 확인)
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
4. .env 파일 생성 및 환경 변수 설정
  - server > .env 파일 생성
  - .env 에 환경 변수 설정  
    `DATABASE_USERNAME='아이디'`  
    `DATABASE_PASSWORD='비밀번호'`  
    `DATABASE_NAME='데이터베이스명'`
5. server > app.js 파일 생성 및 웹 서버 구축 (초기화)
  - app.js 파일을 생성한다.
  - express, cors 모듈만 불러와서 기본적인 서버를 구축한다.
6. server > package.json - "scripts" 필드에 "start" 스크립트 추가  
  `"start": "nodemon --inspect app.js"`
7. 서버를 실행시키고 정상 작동 되는지 확인한다.  
  `npm start`  
  브라우저를 통해 localhost:포트번호 에 접속 후 "Cannot GET /"이 확인 된다면 성공
8. MySQL 데이터베이스와 연동하기
  - config > config.js 생성  
    .env를 이용한 환경에 따른 데이터베이스 연동위한 config 세팅
  - db > index.js 생성  
    Node.js 와 MySQL 연동  
    `mysql.createConnection()`로 생성한 변수를 이용해서 데이터베이스에 쿼리를 날릴 수 있다.
9. 라우팅 : 메소드와 URL에 따라 분기(Routing)한다. (빈 모듈 생성 및 내보내기 한 후 분기에 맞게 연결해준다.)
  - app.js 파일에서 URL를 분기한다. `(routes > index.js 호출)`
  - routes 폴더 > 각 파일 생성 `(controllers > index.js 호출)`
  - controllers 폴더 > 각 파일 생성 `(models > index.js 호출)`
  - models 폴더 > 각 파일 생성 생성 `(db > index.js 호출)`
10. 서버를 실행시키고 해당 URL 요청에 따른 응답이 정상 작동 되는지 확인한다.

### Step 4. Hmarket 프로젝트 클라이언트 구현하기
1. client 폴더 생성과 함께 리액트 앱을 생성 및 실행한다. (NPX 주의!)  
    `npx create-react-app client`
2. React 앱 개발에 필요한 Node.js 모듈을 다운 받는다. (package.json 파일안에 dependencies 필드에 다운받은 모듈 확인)
  - redux : 클라이언트 애플리케이션 상태를 관리하기 위한 오픈 소스 JavaScript 라이브러리 (리덕스의 작동방식(컨셉)을 이해 필요)  
    `npm install redux`
  - react-redux : 리덕스를 리액트 앱에서 사용하기 위해서는 필요하다.  
    `npm install react-redux`
  - axios : 브라우저에서 Node.js에 HTTP 요청을 보내는데 사용되는 Javascript 라이브러리  
    `npm install axios`
  - styled-components : CSS-in-JS 라이브러리  
    `npm install styled-components`
  - storybook : UI 구성 요소 탐색기 - UI 구성 요소와 페이지를 별도로 구축하기 위한 도구  
    `npm install storybook`

## ❗️ 막히는 부분 정리
### 서버 응답 오류 처리
- 400, 500 응답 코드를 언제 어떻게 돌려줘야하는지 감이 잡히지 않음 -> 커뮤니티에 질문 올려놓은 상태
- 해결 : 커뮤니티에 답변 받음 -> 500 응답 코드는 서버 오류 시 자동으로 보내지고 400 번대 돌려 주기 위해 구현 방법 힌트 얻음.
### 깃허브 보안 취약점 경고 받음 - yarn.lock 의 의존성 패키지 업데이트 필요
- 참고 : https://runebook.dev/ko/docs/yarn/managing-dependencies
- `yarn upgrade clien` 명령으로 의존성 업그레이드 커밋 푸쉬 후 해결
