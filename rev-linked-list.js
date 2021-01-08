const linkedListNode = (value) => {
    this.value = value;
    this.next = null;
}

const reverseLinkedList = (headNode) => {
    let temporary;
    let node = head;
    let previous;
  
    while (node) {
        // hold next value
        temporary = node.next;
        // redirect pointer
        node.next = previous;
        // set previous for next reference
        previous = node;
        // update node to next
        node = temporary;
    }

    return previous;
}