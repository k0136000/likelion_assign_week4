import { Router } from 'express';
import createHttpError from 'http-errors';

const router = Router();

let nextId = 2;
let posts = [
  {
    id: 1,
    title: 'Avengers',
  },
  {
    id: 2,
    title: 'Harry poter',
  },
];
router.get('/', (req, res) => {
  if (!req.body.id) {
    throw new createHttpError.BadRequest('등록된 글이 없습니다.');
  }
  res.send(posts);
});

router.get('/:postId', (req, res) => {
  const { postId } = req.params;
  if (!posts[postId - 1]) {
    throw new createHttpError.BadRequest('post not exist');
  }
  return res.json({
    data: posts[postId - 1],
  });
});

router.post('/', (req, res) => {
  posts.push({
    // eslint-disable-next-line no-plusplus
    id: nextId++,
    title: req.body.title,
  });
  res.json(posts);
});

router.put('/:postId', (req, res) => {
  const { postId } = req.params;
  const index = posts.findIndex((text) => text.id === postId);
  if (index === -1) {
    throw createHttpError.NotFound('Writing does not exist');
  }

  posts[index] = {
    id: postId,
    title: req.body.title,
  };
  res.json(posts);
});

router.delete('/:postId', (req, res) => {
  const { postId } = req.params;
  posts = posts.find((post) => post.id !== postId);
  // eslint-disable-next-line no-plusplus
  nextId--;
  res.json(posts);
});

export default router;
