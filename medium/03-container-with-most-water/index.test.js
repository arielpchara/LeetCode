const { maxArea } = require('./index');

describe('Container With Most Water', () => {
  test('[1,8,6,2,5,4,8,3,7] => 49', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });
  test('[1,1] => 1', () => {
    expect(maxArea([1, 1])).toBe(1);
  });
  test('[4,3,2,1,4] => 16', () => {
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
  });
  test('[1,2,1] => 2', () => {
    expect(maxArea([1, 2, 1])).toBe(2);
  });
  test('[2,3,10,5,7,8,9] => 36', () => {
    expect(maxArea([2, 3, 10, 5, 7, 8, 9])).toBe(36);
  });
});
