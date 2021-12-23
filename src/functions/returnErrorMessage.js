module.exports = async function returnErrorMessage(res, errorCode, messageReceived) {
  res.status(errorCode);
  const errorMessage = {
    code: errorCode,
    message: messageReceived,
  };
  return res.send(errorMessage);
};
