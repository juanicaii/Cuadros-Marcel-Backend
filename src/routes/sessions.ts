import {Router} from 'express'
import asyncMiddlewares from '../middlewares/asyncMiddlewares'
import sessionController from '../controllers/session.controller'
const router = Router();

router.get("/login", asyncMiddlewares(sessionController.login))


export default router