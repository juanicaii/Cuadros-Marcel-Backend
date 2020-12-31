import request from 'supertest';
import app from '../src/app';

const loginPath = '/api/session/login';

describe('Test Login endpoint', () => {
  it('should verify if exist user', async () => {
    const response = await request(app)
      .post(loginPath)
      .send({ email: 'juaniseijas00@gmail.com', password: 'Leonelmessi10_1' })
      .set('Accept', 'application/json')
      .expect(200);
    expect(response.body).toEqual(expect.any(Object));
  });

  it('it should send 400 if email is wrong', async () => {
    const response = await request(app)
      .post(loginPath)
      .send({
        email: 'juaniseijas123002@gmail.com',
        password: 'Leonelmessi10_',
      })
      .set('Accept', 'application/json')
      .expect(400);
    expect(response.body).toEqual({
      statusCode: 400,
      error: 'Bad Request',
      message: 'Bad Request',
      details: [
        {
          value: 'juaniseijas123002@gmail.com',
          msg: 'El email no existe',
          param: 'email',
          location: 'body',
        },
      ],
    });
  });
});
