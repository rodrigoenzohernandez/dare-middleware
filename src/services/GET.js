const axios = require('axios');

const { baseUrl, clientId, clientSecret } = require('../../config/config');

async function refreshToken() {
  // if expired get new token and try again

  const body = {
    client_id: clientId,
    client_secret: clientSecret,
  };

  const response = await axios.post(`${baseUrl}/login`, body);

  const config = { headers: { Authorization: `Bearer ${response.data.token}` } };

  return config;
}

async function fetchData(res, config, url) {
  try {
    const response = await axios.get(`${baseUrl}${url}`, config);
    return response.data;
  } catch (error) {
    if (error.response.data.message === 'Authorization token expired') {
      const newConfig = await refreshToken();
      return fetchData(res, newConfig, url);
    }
    res.status(error.response.data.statusCode);
    return error.response.data;
  }
}

module.exports = async function get(res, config, url) {
  return fetchData(res, config, url);
};
