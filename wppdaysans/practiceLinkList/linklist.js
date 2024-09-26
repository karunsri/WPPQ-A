// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
var reverseList = function(head) {
    let prev = null ;
    let curr = head; 
    fwd = null ; 

    while(curr != null){
        fwd = curr.next ; 
        curr.next = prev ; 
        prev = curr ;
        curr = fwd ; 
    }

return prev ; 
};