import { trap } from './index';

describe('Trapping Rain Water', () => {
  test('[0,1,0,2,1,0,1,3,2,1,2,1] => 6', () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });

  test('[4,2,0,3,2,5] => 9', () => {
    expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
  });

  test('empty => 0', () => {
    expect(trap([])).toBe(0);
  });

  test('[1,0,1] => 1', () => {
    expect(trap([1, 0, 1])).toBe(1);
  });

  test('flat array => 0', () => {
    expect(trap([3, 3, 3, 3])).toBe(0);
  });
});
