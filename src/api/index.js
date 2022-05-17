import { Router } from 'express';
import posts from './posts';
import auth from './auth';

const router = Router();

router.use('/auth', auth);
router.use('/posts', posts);

export default router;
