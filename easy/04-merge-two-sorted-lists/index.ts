class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param list1 - First sorted list.
 * @param list2 - Second sorted list.
 * @returns Head of the merged list.
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  void list1;
  void list2;
  // TODO: implement
  return null;
}

export { mergeTwoLists, ListNode };
