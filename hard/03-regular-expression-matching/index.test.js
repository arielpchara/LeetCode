const { isMatch } = require('./index');

describe('Regular Expression Matching', () => {
  test('"aa" pattern "a" => false', () => {
    expect(isMatch('aa', 'a')).toBe(false);
  });
  test('"aa" pattern "a*" => true', () => {
    expect(isMatch('aa', 'a*')).toBe(true);
  });
  test('"ab" pattern ".*" => true', () => {
    expect(isMatch('ab', '.*')).toBe(true);
  });
  test('"aab" pattern "c*a*b" => true', () => {
    expect(isMatch('aab', 'c*a*b')).toBe(true);
  });
  test('"mississippi" pattern "mis*is*p*." => false', () => {
    expect(isMatch('mississippi', 'mis*is*p*.')).toBe(false);
  });
  test('empty string and empty pattern => true', () => {
    expect(isMatch('', '')).toBe(true);
  });
});
