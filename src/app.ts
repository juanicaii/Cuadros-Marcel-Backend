import { PrismaClient } from '@prisma/client';

import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import logError from './middlewares/logError';
import errorHandler from './middlewares/errorHandler';
import sessionController from './routes/sessions';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(logger('dev'));
app.use('/api/session', sessionController);
app.use(logError);
app.use(errorHandler);

export default app;
