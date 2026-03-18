import { search } from './index';

describe('Binary Search', () => {
  test('[-1,0,3,5,9,12], target 9 => 4', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });

  test('[-1,0,3,5,9,12], target 2 => -1', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  });

  test('[-1,0,3,5,9,12, 13, 20, 21, 56], target 5 => 3', () => {
    expect(search([-1,0,3,5,9,12, 13, 20, 21, 56], 5)).toBe(3);
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

  test('[5], target 0 => -1 (single element, not found)', () => {
    expect(search([5], 0)).toBe(-1);
  });

  test('empty array => -1', () => {
    expect(search([], 5)).toBe(-1);
  });

  // Bug coverage: `return offset || -1` returns -1 when offset is 0,
  // even when the target is legitimately at index 0.
  // The cases below must all return 0, never -1.
  test('target at index 0 of a multi-element array => 0', () => {
    expect(search([-1, 0, 3, 5, 9, 12], -1)).toBe(0);
  });

  test('target at index 0, array of length 2 => 0', () => {
    expect(search([7, 99], 7)).toBe(0);
  });

  test('target at index 0, odd-length array => 0', () => {
    expect(search([3, 6, 9, 12, 15], 3)).toBe(0);
  });

  test('target at index 0, even-length array => 0', () => {
    expect(search([2, 4, 6, 8], 2)).toBe(0);
  });

  test('[-1,0,3,5,9,12], target 12 => 5 (last element)', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 12)).toBe(5);
  });

  test('two elements, target is first => 0', () => {
    expect(search([2, 8], 2)).toBe(0);
  });

  test('two elements, target is second => 1', () => {
    expect(search([2, 8], 8)).toBe(1);
  });

  test('two elements, target not present => -1', () => {
    expect(search([2, 8], 5)).toBe(-1);
  });

  test('large sorted array, target in middle', () => {
    const nums = Array.from({ length: 101 }, (_, i) => i * 2); // [0, 2, 4, ..., 200]
    expect(search(nums, 100)).toBe(50);
  });

  test('negative numbers only, target found', () => {
    expect(search([-10, -5, -3, -1], -3)).toBe(2);
  });

  test('negative numbers only, target not found => -1', () => {
    expect(search([-10, -5, -3, -1], -7)).toBe(-1);
  });
});
