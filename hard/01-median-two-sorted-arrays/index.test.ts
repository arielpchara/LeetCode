import { findMedianSortedArrays } from './index';

describe('Median of Two Sorted Arrays', () => {
  test('[1,3] and [2] => 2.0', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  });

  test('[1,2] and [3,4] => 2.5', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  });

  test('[] and [1] => 1.0', () => {
    expect(findMedianSortedArrays([], [1])).toBe(1);
  });

  test('[0,0] and [0,0] => 0.0', () => {
    expect(findMedianSortedArrays([0, 0], [0, 0])).toBe(0);
  });

  test('[1,3] and [2,7] => 2.5', () => {
    expect(findMedianSortedArrays([1, 3], [2, 7])).toBe(2.5);
  });
});
