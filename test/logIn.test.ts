import request from 'supertest'
import app from '../src/app'

const loginPath = '/api/session/login'

describe('Test Login endpoint', () => {
  it('should verify if exist user', async () => {
    const response = await request(app)
      .post(loginPath)
      .send({ email: 'juaniseijas00@gmail.com', password: 'Leonelmessi10_' })
      .set('Accept', 'application/json')
      .expect(200)
    expect(response.body).toEqual({})
  })

  it('it should send 400 if email is wrong', async () => {
    const response = await request(app)
      .post(loginPath)
      .send({ email: 'juaniseijas002@gmail.com', password: 'Leonelmessi10_' })
      .set('Accept', 'application/json')
      .expect(400)
    expect(response.body).toEqual({
      statusCode: 400,
      error: 'Bad Request',
      message: 'Bad Request',
      details: [
        {
          value: 'juaniseijas002@gmail.com',
          msg: 'Email doesnt exist',
          param: 'email',
          location: 'body'
        }
      ]
    })
  })
})
