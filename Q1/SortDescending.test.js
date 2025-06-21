const SortDescending = require('./SortDescending');

describe('SortDescending', () => {
  test('sorts a mixed array in descending order', () => {
    expect(SortDescending([1, 2, 4, 3, 5, 3, 2, 1])).toEqual([5, 4, 3, 3, 2, 2, 1, 1]);
  });

  test('sorts an already descending array', () => {
    expect(SortDescending([5, 4, 3, 2, 1])).toEqual([5, 4, 3, 2, 1]);
  });

  test('sorts an ascending array', () => {
    expect(SortDescending([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });

  test('returns empty array when input is empty', () => {
    expect(SortDescending([])).toEqual([]);
  });

  test('handles single element array', () => {
    expect(SortDescending([42])).toEqual([42]);
  });

  test('handles array with all elements equal', () => {
    expect(SortDescending([7, 7, 7])).toEqual([7, 7, 7]);
  });
});
