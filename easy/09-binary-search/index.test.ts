import { search } from './index';

describe('Binary Search', () => {
  test('[-1,0,3,5,9,12], target 9 => 4', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });

  test('[-1,0,3,5,9,12], target 2 => -1', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  });

  test('[5], target 5 => 0', () => {
    expect(search([5], 5)).toBe(0);
  });

  test('[1,3,5,7,9], target 1 => 0', () => {
    expect(search([1, 3, 5, 7, 9], 1)).toBe(0);
  });

  test('[1,3,5,7,9], target 9 => 4', () => {
    expect(search([1, 3, 5, 7, 9], 9)).toBe(4);
  });
});
