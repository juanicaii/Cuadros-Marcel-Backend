import { PrismaClient } from '@prisma/client';
import { check } from 'express-validator';

const prisma = new PrismaClient();

const loginValidation = () => [
  check('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('email is invalid')
    .custom(async (value) => {
      const email = await prisma.customers.findUnique({
        where: {
          email: value,
        },
      });

      if (!email) {
        throw Error('Email doesnt exist');
      }
    }),

  check('password')
    .notEmpty()
    .withMessage('password is required')
    .isStrongPassword()
    .withMessage('the password is week'),
];
export default loginValidation;
