const request = require('supertest');

const clientsRoutes = require('../../src/routes/clients');

const authRoutes = require('../../src/routes/auth');

const app = require('../../server/app');

app.use('/clients', clientsRoutes);

app.use('/login', authRoutes);

let token;
let firstClientID;

beforeAll(async () => {
  const res = await request(app)
    .post('/login')
    .send({
      client_id: 'dare',
      client_secret: 's3cr3t',
    });
  token = res.body.token;
});

describe('END-TO-END TEST: client', () => {
  it('GET /clients and save first client ID', async () => {
    const res = await request(app)
      .get('/clients')
      .set({ Authorization: `Bearer ${token}` });
    expect(res.statusCode).toEqual(200);
    firstClientID = res.body[0].id;
  });

  it('GET /clients/id with the previous ID stored at the', async () => {
    const res = await request(app)
      .get(`/clients/${firstClientID}`)
      .set({ Authorization: `Bearer ${token}` });
    expect(res.statusCode).toEqual(200);
    expect(res.body.id).toStrictEqual(firstClientID);
  });

  it(`GET /clients/${firstClientID}/policies should be success`, async () => {
    const res = await request(app)
      .get(`/clients/${firstClientID}/policies`)
      .set({ Authorization: `Bearer ${token}` });
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
