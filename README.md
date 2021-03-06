# uber_clone_server

Server for the Uber Clone Course on Nomad Academy. GraphQL, Typescript, NodeJS, logger

---

> yarn init

> yarn add typescript ts-node nodemon --dev

> src 디렉토리, tsconfig.json( typescript 설정 ), tslint.json( typescript linter 설정) 생성 및 셋팅

```
linter 적절한 typescript 코드를 가이드
```

> yarn add tslint-config-prettier --dev

> yarn add @types/node --dev

```
Definitely Typed

많은 라이브러리들이 typescript 로 만들어지진 않았기 때문에

예) node 라이브러리의 함수나 옵션에 type을 셋팅하여 typescript에서도 사용할 수 있도록 셋팅
```

> src/index.ts 셋팅, package.json의 scrpit 항목 셋팅

```
"scripts": {
    "dev": "cd src && nodemon --exec ts-node index.ts"
}
```

=> dev 명령 실행시 src 디렉토리로 들어간 후 ( cd src && )

nodemon을 호출하여 저장 할 때마다 서버를 갱신 하도록 하고 ( nodemon )

index.ts를 ts-node로 실행 한다. ( --exec ts-node index.ts )

```
➜  uber_clone_server git:(master) yarn dev
yarn run v1.17.0
$ cd src && nodemon --exec ts-node index.ts
[nodemon] 1.19.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `ts-node index.ts`
works
[nodemon] clean exit - waiting for changes before restart
```

=> nodemon이 ts 확장자와 graphql 확장자를 감시하도록( -e ) 옵션 추가

```
"scripts": {
    "dev": "... -e ts,graphql"
}
```

> yarn add graphql-yoga

```
graphql-yoga

graphql 로 개발 환경을 만들어줌.
create-react-app 과 유사한 역할을 함.
```

> yarn add helmet morgan cors

```
helmet은 보안을 위한 미들웨어이다.

요청 때마다 미들웨어가 요청을 잠시 멈추고 검사한 후에,

위험하지 않다고 판단 되면 요청을 계속 진행 한다.
```

> yarn add @types/cors @types/helmet @types/morgan --dev

```
cors, helmet, morgan 라이브러리 각각의 type을 설치
```

> yarn add graphql-tools merge-graphql-schemas

```
모든 폴더의 resolvers 파일을 찾아 하나로 합쳐서 graphql에 입력
```

> yarn add babel-runtime graphql-to-typescript gql-merge --dev

```
graphql과 typescript, javascript 가 연결 되지 않았을 경우

각각의 리턴되는 값의 타입이 무엇인지 알려주지 않아

서로 연결된 부분에서 타입이 일치 하지 않을 때 오류가 발생 한 후 찾을 수 밖에 없다.

위 라이브러리를 설치하여 각각을 연결 해 주면 서로 리턴타입을 인지 하여

코딩 시 바로 알 수 있다.

=> graphql의 리턴 값의 타입과 typescript의 리턴 타입을 동기화
```

> yarn add typeorm

```
TypeScript 용 ORM

- ORM
객체 지향 프로그래밍은 클래스를 사용하고, 관계형 데이터베이스는 테이블을 사용하는데
둘 사이의 호환 되지 않는 데이터를 변환 해 주는 것을 의미.
```

> yarn add pg

```
postgreSQL 라이브러리
```

> yarn add dotenv

```
.env 파일을 읽어들일 수 있도록 하는 라이브러리
```

> yarn add class-validator

```
typeORM 의 Entity(model) 선언시 유효성 검사 라이브러리
```

> yarn add bcrypt
> yarn add @types/bcrypt --dev

```
암호화 라이브러리
```

> yarn add twilio
> yarn add @types/twilio --dev

```
글로벌 문자메시지, 통화 API 서비스
```

> yarn add jsonwebtoken
> yarn add @types/jsonwebtoken --dev

```
JWT 라이브러리 설치
```

> yarn add mailgun-js && yarn add @types/mailgun-js --dev
