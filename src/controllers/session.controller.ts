import boom from '@hapi/boom';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { createToken } from '../utils/createToken';
import {
  customerRegister,
  customerLogin,
  getCustomer,
} from '../services/customerService';
import responseWithoutError from '../utils/responseWithoutError';

import statusCode from '../utils/httpStatus';

export const login = async (req: Request, res: Response) => {
  if (!req.body.id) {
    const errors = validationResult(req);
    const { email, password } = req.body;

    if (!errors.isEmpty()) {
      const error = boom.badRequest();
      error.output.payload.details = errors.array();
      throw error;
    }

    const customer = {
      email,
      password,
    };

    const customerLogged = await customerLogin(customer);
    if (customerLogged) {
      const token = createToken(customerLogged);

      responseWithoutError(res, customerLogged, statusCode.ok, token);
    }
  } else {
    const id = parseInt(req.body.id, 10);

    const customerLogged = (await getCustomer(id)) || {};

    responseWithoutError(res, customerLogged, statusCode.ok);
  }
};

export const register = async (req: Request, res: Response) => {
  if (!req.body.id) {
    const errors = validationResult(req);

    const { name, lastname, email, password } = req.body;

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

    if (customerCreated) {
      const token = createToken(customerCreated);

      responseWithoutError(res, customerCreated, statusCode.created, token);
    }
  } else {
    const id = parseInt(req.body.id, 10);

    const customerLogged = (await getCustomer(id)) || {};

    responseWithoutError(res, customerLogged, statusCode.ok);
  }
};
