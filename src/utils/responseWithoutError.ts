import { Response } from 'express';

const responseWithoutError = (res: Response, body: object, status: number) => res.status(status).json(body);

export default responseWithoutError;
