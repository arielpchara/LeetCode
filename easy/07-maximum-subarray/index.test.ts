import { maxSubArray } from './index';

describe('Maximum Subarray', () => {
  test('[-2,1,-3,4,-1,2,1,-5,4] => 6', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  test('[1] => 1', () => {
    expect(maxSubArray([1])).toBe(1);
  });

  test('[5,4,-1,7,8] => 23', () => {
    expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
  });

  test('all negative values => largest element', () => {
    expect(maxSubArray([-8, -3, -6, -2, -5, -4])).toBe(-2);
  });

  test('[0,0,0] => 0', () => {
    expect(maxSubArray([0, 0, 0])).toBe(0);
  });
});
