import { maxProfit } from './index';

describe('Best Time to Buy and Sell Stock', () => {
  test('[7,1,5,3,6,4] => 5', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  test('[7,6,4,3,1] => 0', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  test('[2,4,1] => 2', () => {
    expect(maxProfit([2, 4, 1])).toBe(2);
  });

  test('[1,2] => 1', () => {
    expect(maxProfit([1, 2])).toBe(1);
  });

  test('[3,2,6,5,0,3] => 4', () => {
    expect(maxProfit([3, 2, 6, 5, 0, 3])).toBe(4);
  });
});
