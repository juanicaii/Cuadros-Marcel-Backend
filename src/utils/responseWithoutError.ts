import { Response } from 'express';

const responseWithoutError = (
  res: Response,
  body: object,
  status: number,
  token?: string
) => {
  if (!token) {
    res.status(status).json(body);
  } else {
    res.header('auth-token', token).json(body);
  }
};

export default responseWithoutError;
