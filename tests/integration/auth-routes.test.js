const request = require("supertest");

const authRoutes = require('../../src/routes/auth')
const app = require('../../server/app');

app.use("/login", authRoutes);

describe("INTEGRATION TEST: auth-routes", () => {

    it(`POST /login should be a bad request because it doesn't have a body`, async () => {
        const res = await request(app)
          .post('/login')
        expect(res.statusCode).toEqual(400);
      });
    it(`POST /login should be sucess and have properties token and type`, async () => {
    const res = await request(app)
            .post('/login')
            .send({
                client_id: "dare",
                client_secret: "s3cr3t"  
            })
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
        expect(res.body).toHaveProperty('type');
    });
    it(`POST /login should be unauthorized`, async () => {
        const res = await request(app)
                .post('/login')
                .send({
                    client_id: "invalid-client",
                    client_secret: "invalid-s3cr3t"  
                })
            expect(res.statusCode).toEqual(401);
            expect(res.body).toHaveProperty('error', 'Unauthorized');
            expect(res.body).toHaveProperty('message', 'invalid secret or client id');
        });
});