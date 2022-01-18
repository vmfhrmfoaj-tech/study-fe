# study-typescript

출처 : https://www.youtube.com/watch?v=0UMmCbcZid0&list=PLOSNUO27qFbsI9bAIVitBcq-klZae5GMi

```
npm install -g typescript
tsc --init
```

```typescript
--Hello.ts;
console.log("Hello typescript");
```

```
tsc hello.ts
node hello.js
```

```
npm init -y
npm install nodemon concurrently
```

```
npm install inquirer @types/inquirer
-- inquirer와 concurrently동시 수행시 arrow키 버그있음
-- tsc && node build/index.js
```

```
tsc ./src/sorting/Sorter.ts ./src/sorting/index.ts --outDir ./build/sorting
```
