class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function listToArray(node: ListNode | null): number[] {
  const result: number[] = [];
  let current = node;

  while (current) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

/**
 * @param list1 - First sorted list.
 * @param list2 - Second sorted list.
 * @returns Head of the merged list.
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  
  if(list1 === null) return list2;
  if(list2 === null) return list1;

  if( list1.val <= list2.val ) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
  
}

export { mergeTwoLists, ListNode };
