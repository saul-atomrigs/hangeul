# hangeul

한글 포맷 라이브러리

### install

```
npm i @saul-atomrigs/hangeul
```

#### krw

숫자를 원(KRW)화로 표시합니다

```ts
import {krw} from @saul-atomrigs/hangeul

krw(10_000_000) // 1000만원
```

#### \_x분

\_1분, \_2분, \_3분, \_5분, \_10분, \_15분
밀리초로 변환합니다

```ts
import { _1분 } from '@saul-atomrigs/hangeul';

setTimeout(() => {
  console.log('1분이 지났습니다');
}, _1분); // 60000ms 후 실행
```
