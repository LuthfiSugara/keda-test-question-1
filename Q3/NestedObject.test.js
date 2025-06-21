const NestedObject = require('./NestedObject');

describe('nestedObject', () => {
  test('sums even numbers in a simple nested object', () => {
    const input = {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: 'yup',
        },
      },
    };
    expect(NestedObject(input)).toBe(6);
  });

  test('sums even numbers in a complex nested object', () => {
    const input = {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
      d: 1,
      e: { e: { e: 4 }, ee: 'car' },
    };
    expect(NestedObject(input)).toBe(12);
  });

  test('returns 0 when no even numbers are present', () => {
    const input = {
      a: 1,
      b: { c: 3, d: { e: 5 } },
      f: 'string',
      g: false,
    };
    expect(NestedObject(input)).toBe(0);
  });

  test('handles null values gracefully', () => {
    const input = {
      a: 2,
      b: null,
      c: { d: null, e: 4 },
    };
    expect(NestedObject(input)).toBe(6);
  });

  test('returns 0 when input is an empty object', () => {
    expect(NestedObject({})).toBe(0);
  });
});
