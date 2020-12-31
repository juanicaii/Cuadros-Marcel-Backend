import { PrismaClient } from '@prisma/client';
import bcyrpt from 'bcrypt';

const prisma = new PrismaClient();

interface Icustomer {
  name: string
  lastname: string
  email: string
  password: string
  address?: string | null
  phone?: number | null
  admin?: boolean | false
}

export const customerRegister = async (customer: Icustomer) => {
  const cus = await prisma.customers.create({
    data: {
      name: customer.name,
      lastname: customer.lastname,
      email: customer.email,
      password: customer.password,
      address: customer.address || null,
      phone: customer.password || null,
      admin: customer.admin || false,
    },
  });

  return cus;
};
