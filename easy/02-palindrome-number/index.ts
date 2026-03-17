/**
 * @param x - Integer to inspect.
 * @returns Whether the integer is a palindrome.
 */
function isPalindrome(x: number): boolean | null {
  const seq = String(x).split('')
  for(let i = 0; i < Math.floor(seq.length/2); i++) {
    if( seq[i] !== seq[seq.length-i-1] ) {
      return false
    }
  }
  return true;
}

export { isPalindrome };
