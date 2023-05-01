// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let sum = 0;
  let carry = 0;
  let dummy = new ListNode();
  let tail = dummy;
  while (l1 !== null || l2 !== null || carry !== 0) {
    sum = carry;
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    tail.next = new ListNode(sum);
    tail = tail.next;
  }
  return dummy.next;
}

// Example test case
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
// l1: 2 -> 4 -> 3
// l2: 5 -> 6 -> 4
// sum: 7 -> 0 -> 8

const result = addTwoNumbers(l1, l2);

// Verify that the result is correct
console.log(result.val); // Output: 7
console.log(result.next.val); // Output: 0
console.log(result.next.next.val); // Output: 8
