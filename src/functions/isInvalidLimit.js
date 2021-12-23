module.exports = async function isInvalidLimit(limit) {
  const isNotNumber = Number.isNaN(Number(limit));
  const isNegativeLimit = limit <= 0;
  const isInvalid = isNegativeLimit || isNotNumber;
  return isInvalid;
};
