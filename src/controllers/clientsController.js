const get = require('../services/GET');
const errorMsg = require('../functions/returnErrorMessage');

const clientsController = {
  async getClients(req, res) {
    const config = { headers: { Authorization: req.headers.authorization } };
    const data = await get(res, config, req.baseUrl);

    const limit = req.query.limit || 10;
    const nameFilter = req.query.name;

    let result = data;

    const notNumber = Number.isNaN(Number(limit));
    if (limit <= 0 || notNumber) {
      res.status(404);
      return errorMsg(res, 404, 'Invalid limit. It must be a number greater than 0');
    }

    if (nameFilter) {
      const filter = nameFilter.toLowerCase();
      result = data.filter((client) => ((client.name).toLowerCase()).includes(filter));
    }
    if (!result.length) {
      res.status(404);
      return errorMsg(res, 404, 'Not found any clients with that filter');
    }

    const limitedData = result.slice(0, limit);
    return res.send(limitedData);
  },
  getClient(req, res) {
    try {
      res.send('Endpoint /clients/:id - WIP');
    } catch (error) {
      res.json(error);
    }
  },
  getClientPolicies(req, res) {
    try {
      res.send('Endpoint /clients/:id/policies - WIP');
    } catch (error) {
      res.json(error);
    }
  },
};

module.exports = clientsController;
