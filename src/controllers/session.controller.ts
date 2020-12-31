import boom from '@hapi/boom';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { customerRegister } from '../serivces/customerService';
import responseWithoutError from '../utils/responseWithoutError';
import statusCode from '../utils/httpStatus';

export default {
  login: async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const error = boom.badRequest();
      error.output.payload.details = errors.array();
      throw error;
    }

    responseWithoutError(res, {}, statusCode.created);
  },
  register: async (req: Request, res: Response) => {
    const errors = validationResult(req);
    const {
      name, lastname, email, password,
    } = req.body;

    if (!errors.isEmpty()) {
      const error = boom.badRequest();
      error.output.payload.details = errors.array();
      throw error;
    }

    const customer = {
      name,
      lastname,
      email,
      password,
    };
    const customerCreated = await customerRegister(customer);

    responseWithoutError(res, customerCreated, statusCode.created);
  },
};
