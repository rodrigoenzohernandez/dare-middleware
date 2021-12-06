const get = require('../services/GET');

const policiesController = {
  async getPolicies(req, res) {
    const config = { headers: { Authorization: req.headers.authorization } };
    const data = await get(res, config);
    res.send(data);
  },
  getPolicy(req, res) {
    try {
      res.send('Endpoint /policies/:id - WIP');
    } catch (error) {
      res.status(error.response.data.statusCode);
      res.send(error.response.data);
    }
  },
};

module.exports = policiesController;
