const { lengthOfLongestSubstring } = require('./index');

describe('Longest Substring Without Repeating Characters', () => {
  test('"abcabcbb" => 3', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });
  test('"bbbbb" => 1', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });
  test('"pwwkew" => 3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });
  test('empty string => 0', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });
  test('single char "a" => 1', () => {
    expect(lengthOfLongestSubstring('a')).toBe(1);
  });
  test('"dvdf" => 3', () => {
    expect(lengthOfLongestSubstring('dvdf')).toBe(3);
  });
});
