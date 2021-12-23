const get = require('../services/GET');

const policiesController = {
  async getPolicies(req, res) {
    const config = { headers: { Authorization: req.headers.authorization } };
    const data = await get(res, config, req.baseUrl);
    const { limit } = req.query;
    if (limit) {
      const limitedData = data.slice(0, limit);
      res.send(limitedData);
    } else res.send(data);
  },
  async getPolicy(req, res) {
    const config = { headers: { Authorization: req.headers.authorization } };
    const data = await get(res, config, req.baseUrl);
    const { id } = req.params;
    const policyFiltered = data.find((policy) => policy.id === id);
    if (policyFiltered) res.send(policyFiltered);
    else {
      res.status(404);
      res.send(
        {
          code: 404,
          message: 'not found',
        },
      );
    }
  },
};

module.exports = policiesController;
