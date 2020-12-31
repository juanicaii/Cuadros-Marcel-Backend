import { Router } from 'express';
import asyncMiddlewares from '../middlewares/asyncMiddlewares';
import { getProducts, getProduct } from '../controllers/products.controller';
import {
  productsValidation,
  productsIdValidation,
} from '../validation/productsValidation';
const router = Router();

router.get('/products/:page', asyncMiddlewares(getProducts));
router.get(
  '/product/:id',
  productsIdValidation(),
  asyncMiddlewares(getProduct)
);

export default router;
