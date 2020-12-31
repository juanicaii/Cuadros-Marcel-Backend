import bcrypt from 'bcrypt';
import boom from '@hapi/boom';

export const validatePassword = (password: string, passwordHashed: string) => {
  const validarPassword = bcrypt.compareSync(password, passwordHashed);

  if (!validarPassword) {
    throw boom.badRequest('Clave incorrecta');
  }
};
