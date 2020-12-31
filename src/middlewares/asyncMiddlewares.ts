import boom from '@hapi/boom';
import {
  Request, Response, NextFunction, RequestHandler,
} from 'express';

const asyncMiddleware = (fn: RequestHandler) => (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    if (!err.isBoom) {
      return next(boom.badImplementation(err));
    }
    next(err);
  });
};

export default asyncMiddleware;
