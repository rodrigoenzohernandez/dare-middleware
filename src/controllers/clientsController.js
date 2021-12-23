const get = require('../services/GET');

const clientsController = {
  async getClients(req, res) {
    const config = { headers: { Authorization: req.headers.authorization } };
    const data = await get(res, config, req.baseUrl);

    const limit = req.query.limit || 10;
    const nameFilter = (req.query.name);

    let result = data;

    const notNumber = Number.isNaN(Number(limit));
    if (limit <= 0 || notNumber) {
      res.status(404);
      return res.json(
        {
          code: 404,
          message: 'Invalid limit. It must be a number greater than 0',
        },
      );
    }

    if (nameFilter) {
      const filter = nameFilter.toLowerCase();
      result = data.filter((client) => ((client.name).toLowerCase()).includes(filter));
    }
    if (!result.length) {
      res.status(404);
      return res.json(
        {
          code: 404,
          message: 'Not found any clients with that filter',
        },
      );
    }
    if (limit) {
      const limitedData = result.slice(0, limit);
      return res.send(limitedData);
    }
    return res.send(result);
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
