import { Request, Response } from 'express';
import boom from '@hapi/boom';
import { validationResult } from 'express-validator';
import responseWithoutError from '../utils/responseWithoutError';
import { getOneProduct } from '../services/productsService';

export const getProducts = (req: Request, res: Response) => {
  const { page, category, size } = req.params;

  const offset = page ? parseInt(page, 10) * 6 : 0;
};

export const getProduct = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  const { id } = req.params;

  if (!errors.isEmpty()) {
    const error = boom.badRequest();
    error.output.payload.details = errors.array();
    throw error;
  }

  const product = await getOneProduct(id);

  if (product) {
    responseWithoutError(res, product, 200);
  }
};
