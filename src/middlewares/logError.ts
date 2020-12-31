import {
  Request, Response, NextFunction, RequestHandler,
} from 'express';
import { Output, Payload, Options } from '@hapi/boom';

export default async function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.error({ err });
  next(err);
}
