# study-typescript

출처 : https://www.youtube.com/watch?v=0UMmCbcZid0&list=PLOSNUO27qFbsI9bAIVitBcq-klZae5GMi

### 설치

```
npm install -g typescript
tsc --init
npm init -y
npm install nodemon concurrently
npm install inquirer @types/inquirer
```

### typescript빌드 및 node 실행

```
tsc index.ts
node index.js
```

#### bug

```
-- inquirer와 concurrently동시 수행시 arrow키 버그있음
-- tsc && node build/index.js
```

### 실행

```
npm start
npm run todo
npm run sort
```
