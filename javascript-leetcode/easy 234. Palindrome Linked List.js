/********************************************************************************
*
Given the head of a singly linked list, return true if it is a 
palindrome
 or false otherwise.

 

Example 1:


Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false
 

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
 

Follow up: Could you do it in O(n) time and O(1) space?
*
*********************************************************************************/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let forwardArray = []
  let node = head

  while (node) {
    let value = node.val
    forwardArray.push(value)
    node = node.next
  }

  let r = forwardArray.length - 1
  let l = 0

  while (l <= r) {
    if (forwardArray[l] !== forwardArray[r]) return false
    l++
    r--
  }
  return true
}

/********************************************************************************
*
recursive solution

var isPalindrome = function(head) {
    let left = head

    return recursive(head)

    function recursive (head){
        if(head === null) return true 

        let res = recursive(head.next)
 
        let isValSame = left.val === head.val
        left = left.next

        return res && isValSame
    }

}
*
*********************************************************************************/


/********************************************************************************
*
先找到 mid 
再將 mid 的后半部分反轉

ex : [1,2,3,3,2,1] = > [1 -> 2 -> 3][3 <- 2 <- 1]

再從左右兩邊開始比較

var isPalindrome = function(head) {
    const mid = getMiddleNode(head);
    const afterMid = reverseList(mid.next)
    let leftSide = head;
    let rightSide = afterMid;

    let res = true;

    while(rightSide) {
        if (rightSide.val !== leftSide.val) {
            res = false;
            break;
        };

        rightSide = rightSide.next;
        leftSide = leftSide.next;
    }
    
    reverseList(afterMid)

    return res;
};

function reverseList(head) {
    if (head === null) return null

    let prev = null;
    let curr = head;
    let nextTemp;

    while (curr !== null) {
        nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    return prev;
}

function getMiddleNode(head) {
    let fast = head;
    let slow = head;

    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
}
*
*********************************************************************************/

/********************************************************************************
*
C++ recursive solution

class Solution {
    ListNode head;
    public boolean isPalindrome(ListNode head) {
        if(this.head==null) this.head=head;
        if(head==null) return true;
        
        boolean flag = isPalindrome(head.next) && head.val == this.head.val;
        this.head=this.head.next;
        
        return flag;
    }
}
*
*********************************************************************************/