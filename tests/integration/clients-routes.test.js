const express = require("express");
const request = require("supertest");

const clientRoutes = require('../../src/routes/clients')
const app = express();

app.use("/clients", clientRoutes);

describe("INTEGRATION TEST: client-routes", () => {
  it("GET /clients should be unauthorized", async () => {
    const { body } = await request(app).get("/clients");
    expect(body.code).toEqual(401);
  });
});