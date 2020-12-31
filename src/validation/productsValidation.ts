import { PrismaClient } from '@prisma/client';
import { check } from 'express-validator';
import boom from '@hapi/boom';
import { validateImage } from './validateImage';

const prisma = new PrismaClient();

export const productsValidation = () => [
  check('name').notEmpty().withMessage('El nombre no puede estar en blanco'),

  check('image')
    .notEmpty()
    .withMessage('La imagen no puede estar en blanco')
    .custom((value: string) => validateImage(value)),
  check('width')
    .notEmpty()
    .withMessage('El ancho no puede estar en blanco')
    .isFloat()
    .withMessage('Ingrese un ancho valido'),
  check('length')
    .notEmpty()
    .withMessage('El largo no puede estar en blanco')
    .isFloat()
    .withMessage('Ingrese un largo valido'),
  check('heigth')
    .notEmpty()
    .withMessage('El alto no puede estar en blanco')
    .isFloat()
    .withMessage('Ingrese un alto valido'),
  check('stock')
    .notEmpty()
    .withMessage('El stock no puede estar en blanco')
    .custom((value) => {
      if (value < 0) {
        return false;
      }
      return true;
    })
    .withMessage('Ingrese un stock mayor a 0')
    .isNumeric()
    .withMessage('Ingrese un stock valido'),
];

export const productsIdValidation = () => [
  check('id').custom(async (value) => {
    const pro = await prisma.products.findUnique({
      where: {
        id: parseInt(value, 10),
      },
    });
    if (!pro) throw boom.badRequest('No existe producto con ese id');
    return true;
  }),
];
