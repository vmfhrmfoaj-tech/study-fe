# Jest

ref:

- https://www.daleseo.com/jest-basic/

### 설치

```sh
$ npm init -y
$ npm install jest
```

### 테스트 스크립트 등록

```json
// package.json
...
  "scripts": {
    "test": "jest"
  },
...
```

### 테스트 작성

```json
// **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x)
__tests__ 폴더 전체 대상
test.js 로 끝나는 파일 대상.
```

#### 테스트 실행

```sh
$ npm test
```
