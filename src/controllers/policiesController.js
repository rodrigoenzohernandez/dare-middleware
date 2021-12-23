const get = require('../services/GET');
const errorMsg = require('../functions/returnErrorMessage');

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
    if (policyFiltered) return res.send(policyFiltered);
    return errorMsg(res, 404, `No policy was found with the id: ${id}`);
  },
};

module.exports = policiesController;
