import express from 'express';
import api from './api'; // 기본 폴더를 index.js로 판단하기 때문에 ./api/index라 할 필요 없음

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', api); // local host.../api의 주소를 입력했을때 ./api/index의 주소로 들어가라는 의미.

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`서버실행 => http://localhost:${port}`);
});
