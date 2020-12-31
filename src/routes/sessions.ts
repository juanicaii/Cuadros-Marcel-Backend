import { Router } from 'express';
import asyncMiddlewares from '../middlewares/asyncMiddlewares';
import sessionController from '../controllers/session.controller';
import loginValidation from '../validation/loginValidation';
import registerValidation from '../validation/registerValidation';

const router = Router();

router.post('/login', loginValidation(), asyncMiddlewares(sessionController.login));
router.post('/register', registerValidation(), asyncMiddlewares(sessionController.register));

export default router;
