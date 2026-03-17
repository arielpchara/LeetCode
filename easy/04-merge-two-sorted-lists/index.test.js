const { mergeTwoLists, ListNode } = require('./index');

function arrayToList(arr) {
  if (!arr.length) return null;
  const head = new ListNode(arr[0]);
  let cur = head;
  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }
  return head;
}

function listToArray(node) {
  const result = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  return result;
}

describe('Merge Two Sorted Lists', () => {
  test('example 1: [1,2,4] + [1,3,4] => [1,1,2,3,4,4]', () => {
    expect(listToArray(mergeTwoLists(arrayToList([1,2,4]), arrayToList([1,3,4])))).toEqual([1,1,2,3,4,4]);
  });
  test('both empty => []', () => {
    expect(listToArray(mergeTwoLists(null, null))).toEqual([]);
  });
  test('one empty: [] + [0] => [0]', () => {
    expect(listToArray(mergeTwoLists(null, arrayToList([0])))).toEqual([0]);
  });
  test('[1,3,5] + [2,4,6] => [1,2,3,4,5,6]', () => {
    expect(listToArray(mergeTwoLists(arrayToList([1,3,5]), arrayToList([2,4,6])))).toEqual([1,2,3,4,5,6]);
  });
  test('[1] + [2] => [1,2]', () => {
    expect(listToArray(mergeTwoLists(arrayToList([1]), arrayToList([2])))).toEqual([1,2]);
  });
});
