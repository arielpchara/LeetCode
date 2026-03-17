/**
 * @param nums - Input integers.
 * @returns Whether any value appears at least twice.
 */
function containsDuplicate(nums: number[]): boolean {
  const duplicates = new Set<number>()
  for(let num of nums) {
    if(duplicates.has(num)) {
      return true
    }
    duplicates.add(num)
  }
  return false
}

export { containsDuplicate };
