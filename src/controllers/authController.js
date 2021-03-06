const axios = require('axios');
const { baseUrl } = require('../../config/config');

const authController = {

  /**
 * Post to /login endpoint of the Insurance API to authenticate and get token
 * @param {object} req   Node autogenerated request object
 * @param {object} res   Node autogenerated response object
 * @returns {object}     Response with the token, type and expiration
 *
 */

  async login(req, res) {
    try {
      const body = {
        client_id: req.body.client_id,
        client_secret: req.body.client_secret,
      };

      const response = await axios.post(`${baseUrl}/login`, body);

      response.data.expires_in = 600;

      await res.send(response.data);
    } catch (error) {
      res.status(error.response.data.statusCode);
      res.send(error.response.data);
    }
  },
};

module.exports = authController;
