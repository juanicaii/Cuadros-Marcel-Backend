import { Customers } from '@prisma/client';
import jwt from 'jsonwebtoken';

export const createToken = (customer: Customers) => {
  const token = jwt.sign(customer, process.env.JWT || '9eh94jv2000', {
    expiresIn: 60 * 60 * 24,
  });
  return token;
};
