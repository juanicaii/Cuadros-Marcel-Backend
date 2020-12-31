import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { validatePassword } from '../../validation/validatePassword';

const prisma = new PrismaClient();

interface IcustomerRegister {
  name: string;
  lastname: string;
  email: string;
  password: string;
  address?: string;
  phone?: string;
  admin?: boolean;
}
interface IcustomerLogin {
  email: string;
  password: string;
}

export const customerRegister = async (customer: IcustomerRegister) => {
  const salt = bcrypt.genSaltSync();
  const passwordHashed = bcrypt.hashSync(customer.password, salt);
  const cus = await prisma.customers.create({
    data: {
      name: customer.name,
      lastname: customer.lastname,
      email: customer.email,
      password: passwordHashed,
      address: customer.address,
      phone: customer.phone,
      admin: customer.admin,
    },
  });

  return cus;
};

export const customerLogin = async (customer: IcustomerLogin) => {
  const cus = await prisma.customers.findUnique({
    where: {
      email: customer.email,
    },
  });

  if (cus) {
    validatePassword(customer.password, cus.password);
  }

  return cus;
};

export const getCustomer = async (id: number) => {
  const cus = await prisma.customers.findUnique({
    where: {
      id,
    },
  });

  return cus;
};
