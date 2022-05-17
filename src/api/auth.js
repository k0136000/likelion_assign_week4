/* eslint-disable no-lonely-if */
import { Router } from 'express';
import createHttpError from 'http-errors';
import { clients } from './imformation';

const router = Router();

router.get('/login', (req, res) => {
  // res.send(req.params.id);
  const { ID } = req.query;
  const { PW } = req.query;
  // eslint-disable-next-line no-undef
  if (!ID) {
    throw new createHttpError.BadRequest('아이디를 입력하세요!');
  // eslint-disable-next-line no-restricted-globals
  } else if (!PW) {
    throw new createHttpError.BadRequest('비밀 번호를 입력하세요!');
  } else {
    const clientImf = clients.find((client) => client.ID === ID);
    if (!clientImf) {
      throw new createHttpError.BadRequest('해당 아이디가 존재하지 않습니다.');
    } else {
      if (clientImf.PW === PW) {
        res.send('로그인 성공!');
      } else {
        res.send('로그인 실패!');
      }
    }
  }
});

router.post('/register', (req, res) => {
  const { clientName } = req.query;
  const { clientID } = req.query;
  const { clientPW } = req.query;
  const client = {
    name: clientName,
    ID: clientID,
    PW: clientPW,
  };
  // eslint-disable-next-line no-restricted-globals
  if (!clientName || !clientID || !clientPW) {
    throw new createHttpError.BadRequest('아이디, 패스워드, 혹은 이름을 입력하지 않았습니다.');
  } else {
    if (clients.find((clnt) => clnt.ID === clientID)) {
      res.send('중복된 아이디 입니다.');
    }
    clients.push(client);
    res.send({
      message: '회원가입 성공!',
      data: clients,
    });
  }
});

export default router;
