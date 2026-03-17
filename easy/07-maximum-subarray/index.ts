/**
 * @param nums - Input integers.
 * @returns Largest possible sum of a contiguous subarray.
 */
function maxSubArray(nums: number[]): number | null {
  let sum = nums[0]
  let max = nums[0]
  for(let i = 1; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i])
    max =  Math.max(max, sum)
  }
  return max;
}

export { maxSubArray };
