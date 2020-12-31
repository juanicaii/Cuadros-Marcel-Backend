import { Router } from 'express';
import asyncMiddlewares from '../middlewares/asyncMiddlewares';
import { login, register } from '../controllers/session.controller';
import loginValidation from '../validation/loginValidation';
import registerValidation from '../validation/registerValidation';
import { verifyToken } from '../middlewares/verifyToken';

const router = Router();

router.post('/login', loginValidation(), verifyToken, asyncMiddlewares(login));
router.post(
  '/register',
  registerValidation(),
  verifyToken,
  asyncMiddlewares(register)
);

export default router;
