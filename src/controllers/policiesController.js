const get = require('../services/GET');

const policiesController = {
  async getPolicies(req, res) {
    const config = { headers: { Authorization: req.headers.authorization } };
    const data = await get(res, config);
    const { limit } = req.query;
    if (limit) {
      const limitedData = data.slice(0, limit);
      res.send(limitedData);
    } else res.send(data);
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
