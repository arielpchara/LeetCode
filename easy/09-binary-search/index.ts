/**
 * @param nums - Sorted input array.
 * @param target - Value to find.
 * @returns Index of target
 * or -1 if absent.
 */

// [-1,0,3,5,9,12], target = 9
// [5,9,12] offset = 3
// [9,12] offset = 4
// function search(nums: number[], target: number): number {
//   let offset = 0
//   if(nums[0] === target) return 0
//   while(nums.length > 1) {
//     const middle = Math.ceil(nums.length/2)
//     // split in 2 parts
//     const left = nums.splice(0,middle)
//     const right = nums
//     console.log('offset', offset, middle, target, right[0], nums)
//     // if target is on left part
//     if(target <= left[left.length-1]) {
//       if(left[0] === target) break
//       nums = left
//     }
//     if(target >= right[0]) {
//       offset += middle
//       if(right[0] === target) break
//       nums = right
//     }
//   }
//   return offset || -1;
// }

// standard solution
function search(nums: number[], target: number): number {
  let begin = 0;
  let end = nums.length - 1;

  while (begin <= end) {
    // this weird solution is used in case of hi number like 2^21-1 (~2.1 billion) 
    const middle = (begin + end) >>> 1;
    if (nums[middle] === target) return middle;
    if (nums[middle] < target) begin = middle + 1;
    else end = middle - 1;
  }

  return -1;
}


export { search };
