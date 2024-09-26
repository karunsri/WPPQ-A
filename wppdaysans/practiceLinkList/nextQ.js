var removeNthFromEnd = function(head, n) {
    let prev = null ;
    let slow = head ; 
    let fast = head ; 
    for(let i = 0 ; i < n ; i++){
        fast = fast.next ; 
    }

    while(fast != null){
        prev = slow;
        slow = slow.next ;
        fast = fast.next ;
    }

    if(prev == null) head = head.next ;
    else prev.next = slow.next ;
    
    return head ;
}