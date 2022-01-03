const isInvalidLimit = require('../../src/functions/isInvalidLimit');

describe('UNIT TEST: function isInvalidLimit', () => {
  test('Test valid limit', async () => {
    expect(await isInvalidLimit(5)).toStrictEqual(false);
  });
  test('Test invalid NaN limit', async () => {
    expect(await isInvalidLimit('invalid limit')).toStrictEqual(true);
  });
  test('Test invalid negative limit', async () => {
    expect(await isInvalidLimit(-20)).toStrictEqual(true);
  });
  test('Test invalid undefined limit', async () => {
    expect(await isInvalidLimit()).toStrictEqual(true);
  });
});
