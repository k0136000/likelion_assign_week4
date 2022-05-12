import express from 'express';
import api from './api/index';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', api);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`서버실행 => http://localhost:${port}`);
});
