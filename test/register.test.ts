import request from 'supertest';
import app from '../src/app';

const loginPath = '/api/session/register';

describe('Test Register endpoint', () => {
  it('should verify if exist user and create the user', async () => {
    const response = await request(app)
      .post(loginPath)
      .send({ email: 'juaniseijas02@gmail.com', password: 'Leonelmessi10_' })
      .set('Accept', 'application/json')
      .expect(201);
    expect(response.body).toEqual(expect.any(Object));
  });

  it('it should send 400 if email is wrong', async () => {
    const response = await request(app)
      .post(loginPath)
      .send({ email: 'juaniseijas00@gmail.com', password: 'Leonelmessi10_' })
      .set('Accept', 'application/json')
      .expect(400);
    expect(response.body).toEqual({
      statusCode: 400,
      error: 'Bad Request',
      message: 'Bad Request',
      details: [
        {
          value: 'juaniseijas002@gmail.com',
          msg: 'El email ya existe',
          param: 'email',
          location: 'body',
        },
      ],
    });
  });
});
