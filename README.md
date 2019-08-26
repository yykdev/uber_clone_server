# uber_clone_server

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
