import { isValid } from './index';

describe('Valid Parentheses', () => {
  test('"()" is valid', () => {
    expect(isValid('()')).toBe(true);
  });

  test('"()[]{}" is valid', () => {
    expect(isValid('()[]{}')).toBe(true);
  });

  test('"(]" is invalid', () => {
    expect(isValid('(]')).toBe(false);
  });

  test('"([)]" is invalid', () => {
    expect(isValid('([)]')).toBe(false);
  });

  test('"{[]}" is valid', () => {
    expect(isValid('{[]}')).toBe(true);
  });

  test('empty string is valid', () => {
    expect(isValid('')).toBe(true);
  });
});
