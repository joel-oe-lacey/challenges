// Delete a node from a singly - linked list, ↴ given only a variable pointing to that node.

// The input could, for example, be the variable b below:

class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const a = new LinkedListNode('A');
const b = new LinkedListNode('B');
const c = new LinkedListNode('C');

a.next = b;
b.next = c;

//input: target node
//output: none

//list isn't linked internally want to start on first node
//how would you know what the start node is save semantic naming? 

const deleteNode = target => {
    const node = a;
    if (node.next.value = target) {
        node.next = node.next.next;
    } else {
        node = node.next;
    }
}

deleteNode(b);