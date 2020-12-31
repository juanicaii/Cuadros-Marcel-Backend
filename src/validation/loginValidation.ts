import { PrismaClient } from '@prisma/client';
import { check } from 'express-validator';

const prisma = new PrismaClient();

const loginValidation = () => [
  check('email')
    .notEmpty()
    .withMessage('El email no puede estar vacio')
    .isEmail()
    .withMessage('El email es invalido')
    .custom(async (value) => {
      if (value) {
        const email = await prisma.customers.findUnique({
          where: {
            email: value,
          },
        });

        if (!email) {
          throw Error('El email no existe');
        }
      }
    }),

  check('password')
    .notEmpty()
    .withMessage('La clave no puede estar en blanco')
    .isStrongPassword()
    .withMessage('La clave es debil'),
];
export default loginValidation;
