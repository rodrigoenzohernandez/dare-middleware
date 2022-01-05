/**
 * Validates the limit of the request
 * @param {int} limit   Limit of elements that will have the request
 * @returns {boolean}   True == IsInvalid / False == IsNotInvalid
 *
 */
module.exports = async function isInvalidLimit(limit) {
  const isNotNumber = Number.isNaN(Number(limit));
  const isNegativeLimit = limit <= 0;
  const isInvalid = isNegativeLimit || isNotNumber;
  return isInvalid;
};
