const axios = require('axios');

const { baseUrl, clientId, clientSecret } = require('../../config/config');

async function refreshToken(res) {
  // if expired get new token and try again

  const body = {
    client_id: clientId,
    client_secret: clientSecret,
  };

  const response = await axios.post(`${baseUrl}login`, body);

  const config = { headers: { Authorization: `Bearer ${response.data.token}` } };

  // eslint-disable-next-line no-use-before-define
  return fetchData(res, config);
}

async function fetchData(res, config) {
  try {
    const response = await axios.get(`${baseUrl}policies`, config);
    return response.data;
  } catch (error) {
    if (error.response.data.message === 'Authorization token expired') {
      return refreshToken();
    }
    res.status(error.response.data.statusCode);
    return error.response.data;
  }
}

module.exports = async function get(res, config) {
  return fetchData(res, config);
};
