/**
 * @param n - Number of steps.
 * @returns Distinct ways to climb to the top.
 */
function climbStairs(n: number): number {
  if(n < 1 || n >= 45) return 0
  // 1 = 1
  // 2 = 1,1 / 2
  // 3 = 1,1,1 / 1,2 / 2,1
  // 4 = 1,1,1,1 / 1,1,2 / 2,1,1 / 2,2
  // 5 = 1,1,1,1,1 / 1,1,1,2 / 1,1,2,1 / 1,2,1,1 / 2,1,1,1 / 1,2,2 / 2,1,2 / 2,2,1
  const seq: number[] = [1,1]
  for(let i = 1; i < n; i++) {
    seq[i+1] = seq[i] + seq[i-1]
    console.log(seq)
  }
  return seq.pop() || 0;
}

export { climbStairs };
