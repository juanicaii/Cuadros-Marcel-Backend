import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface IPayload {
  id: string;
  iat: number;
  exp: number;
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('auth-token');

  if (token) {
    const payload = jwt.verify(
      token,
      process.env.JWT || '9eh94jv2000'
    ) as IPayload;

    req.body.id = payload.id;
  }

  next();
};
