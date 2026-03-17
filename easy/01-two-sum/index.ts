/**
 * @param nums - Array of integers.
 * @param target - Desired sum.
 * @returns Indices of the two matching values.
 */
function twoSum(nums: number[], target: number): number[] | null {
  const store: Record<number, number> = {}
  for (let i = 0; i< nums.length; i++) {
    const complement = target - nums[i]
    if( store[complement] != undefined ) {
      return [store[complement], i]
    }
    store[nums[i]] = i
  }
  return null
}

export { twoSum };
