const { threeSum } = require('./index');

function sortResult(result) {
  if (!result) return null;
  return result.map(t => [...t].sort((a, b) => a - b)).sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
}

describe('3Sum', () => {
  test('[-1,0,1,2,-1,-4] => [[-1,-1,2],[-1,0,1]]', () => {
    expect(sortResult(threeSum([-1, 0, 1, 2, -1, -4]))).toEqual(sortResult([[-1, -1, 2], [-1, 0, 1]]));
  });
  test('[0,1,1] => []', () => {
    expect(threeSum([0, 1, 1])).toEqual([]);
  });
  test('[0,0,0] => [[0,0,0]]', () => {
    expect(sortResult(threeSum([0, 0, 0]))).toEqual([[0, 0, 0]]);
  });
  test('no valid triplets returns empty array', () => {
    expect(threeSum([1, 2, 3])).toEqual([]);
  });
  test('multiple triplets are returned without duplicates', () => {
    const result = sortResult(threeSum([-4, -1, -1, 0, 1, 2]));
    expect(result).toEqual(sortResult([[-1, -1, 2], [-1, 0, 1]]));
  });
});
