const axios = require('axios');
const { baseUrl } = require('../../config/config');

const authController = {
  async login(req, res) {
    try {
      // TODO: validate user before getting insurance token
      const body = {
        client_id: req.body.client_id,
        client_secret: req.body.client_secret,
      };

      const response = await axios.post(`${baseUrl}login`, body);

      await res.send(response.data);
    } catch (error) {
      res.status(error.response.data.statusCode);
      res.send(error.response.data);
    }
  },
};

module.exports = authController;
