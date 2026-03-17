import { isPalindrome } from './index';

describe('Palindrome Number', () => {
  test('121 is a palindrome', () => {
    expect(isPalindrome(121)).toBe(true);
  });

  test('-121 is not a palindrome', () => {
    expect(isPalindrome(-121)).toBe(false);
  });

  test('10 is not a palindrome', () => {
    expect(isPalindrome(10)).toBe(false);
  });

  test('0 is a palindrome', () => {
    expect(isPalindrome(0)).toBe(true);
  });

  test('1221 is a palindrome', () => {
    expect(isPalindrome(1221)).toBe(true);
  });

  test('12321 is a palindrome', () => {
    expect(isPalindrome(12321)).toBe(true);
  });
});
