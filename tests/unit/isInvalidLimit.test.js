const isInvalidLimit = require('../../src/functions/isInvalidLimit');

describe('UNIT TEST: function isInvalidLimit', () => {
  test('valid limit', async () => {
    expect(await isInvalidLimit(5)).toStrictEqual(false);
  });
  test('invalid NaN limit', async () => {
    expect(await isInvalidLimit('invalid limit')).toStrictEqual(true);
  });
  test('invalid negative limit', async () => {
    expect(await isInvalidLimit(-20)).toStrictEqual(true);
  });
  test('invalid undefined limit', async () => {
    expect(await isInvalidLimit()).toStrictEqual(true);
  });
});
