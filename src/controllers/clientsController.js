const clientsController = {
  getClients(req, res) {
    try {
      res.json('Endpoint /clients - WIP');
    } catch (error) {
      console.log(error);
      res.json(error);
    }
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
