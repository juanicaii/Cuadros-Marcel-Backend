import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllProduct = async () => {};

export const getOneProduct = async (id: string) => {
  const pro = await prisma.products.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });

  return pro;
};
