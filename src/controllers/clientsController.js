const get = require('../services/GET');
const errorMsg = require('../functions/returnErrorMessage');
const isInvalidLimit = require('../functions/isInvalidLimit');

async function getClientDetail(req, res) {
  const config = { headers: { Authorization: req.headers.authorization } };
  const data = await get(res, config, req.baseUrl);
  const { id } = req.params;
  const clientFiltered = data.find((client) => client.id === id);
  if (clientFiltered) {
    const policiesData = await get(res, config, '/policies');
    // filter the policies according to the current client
    const policiesFiltered = policiesData.filter((policy) => policy.clientId === id);

    // add property policies to the return object
    clientFiltered.policies = policiesFiltered;
    return clientFiltered;
  }
  errorMsg(res, 404, `No client policies were found with the clientId: ${id}`);
  return null;
}

const clientsController = {
  async getClients(req, res) {
    const config = { headers: { Authorization: req.headers.authorization } };
    const data = await get(res, config, req.baseUrl);

    const limit = req.query.limit || 10;
    const nameFilter = req.query.name;

    let result = data;

    if (req.query.limit) {
      if (await isInvalidLimit(limit)) return errorMsg(res, 404, 'Invalid limit. It must be a number greater than 0');
    }

    if (nameFilter) {
      const filter = nameFilter.toLowerCase();
      result = data.filter((client) => ((client.name).toLowerCase()).includes(filter));
    }
    if (!result.length) {
      return errorMsg(res, 404, 'Not found any clients with that filter');
    }

    const limitedData = result.slice(0, limit);
    return res.send(limitedData);
  },
  async getClient(req, res) {
    const clientDetail = await getClientDetail(req, res);
    if (clientDetail) res.send(clientDetail);
  },
  async getClientPolicies(req, res) {
    const clientDetail = await getClientDetail(req, res);
    if (clientDetail) {
      const clientPolicies = clientDetail.policies;
      res.send(clientPolicies);
    }
  },
};

module.exports = clientsController;
