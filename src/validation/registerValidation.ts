import { PrismaClient } from '@prisma/client';
import { check } from 'express-validator';

const prisma = new PrismaClient();

const regiterValidation = () => [
  check('name').notEmpty().withMessage('El nombre no puede estar en blanco'),
  check('lastname').notEmpty().withMessage('El apellido no puede estar en blanco'),
  check('email')
    .notEmpty()
    .withMessage('El email no puede estar en blanco')
    .isEmail()
    .withMessage('El email es invalido')
    .custom(async (value) => {
      const email = await prisma.customers.findUnique({
        where: {
          email: value,
        },
      });

      if (email) {
        throw Error('El email ya existe');
      }
    }),
  check('password')
    .notEmpty()
    .withMessage('El password no puede estar en blanco')
    .isStrongPassword()
    .withMessage('El password es debil'),
  check('address').optional().isString().withMessage('direccion invalida'),
  check('phone').optional().isMobilePhone('ar-SA').withMessage('numero invalido'),
];
export default regiterValidation;
