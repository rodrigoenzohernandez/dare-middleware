const errorMsg = require('../functions/returnErrorMessage');

module.exports = (req, res, next) => {
  if (req.headers.authorization) next();
  else {
    errorMsg(res, 401, 'Unauthorized');
  }
};
