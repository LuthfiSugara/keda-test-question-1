const MaxSum = require('./MaxSum');

describe('MaxSum', () => {
  test('returns 700 for input ([100, 200, 300, 400], 2)', () => {
    expect(MaxSum([100, 200, 300, 400], 2)).toBe(700);
  });

  test('returns 39 for input ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)', () => {
    expect(MaxSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
  });

  test('returns 5 for input ([-3, 4, 0, -2, 6, -1], 2)', () => {
    expect(MaxSum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
  });

  test('returns null when num > array length', () => {
    expect(MaxSum([1, 2, 3], 5)).toBeNull();
  });

  test('returns correct result for array with negative numbers only', () => {
    expect(MaxSum([-5, -2, -1, -3], 2)).toBe(-3); // -1 + -2
  });

  test('returns 0 for array of zeros', () => {
    expect(MaxSum([0, 0, 0, 0], 2)).toBe(0);
  });
});
