import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import logError from './middlewares/logError';
import errorHandler from './middlewares/errorHandler';
import sessionRoutes from './routes/sessions';
import productsRoutes from './routes/products';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(logger('dev'));
app.use('/api/session', sessionRoutes);
app.use('/api', productsRoutes);
app.use(logError);
app.use(errorHandler);

export default app;
