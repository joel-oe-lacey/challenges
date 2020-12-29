//Write a function to check that a binary tree ↴ is a valid binary search tree. ↴

//Pseudocode
//we'll want to step through the tree and check each branch is ordered lowest to highest from left to right
//utilize BFS as we aren't aiming at a particular path 
//start at the head node 
//check at each addition to the queue that values are greater than the previous, if not then fail

class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertLeft(value) {
        this.left = new BinaryTreeNode(value);
        return this.left;
    }

    insertRight(value) {
        this.right = new BinaryTreeNode(value);
        return this.right;
    }
}

function isBinarySearchTree(treeRoot) {
    let stack = [treeRoot];
    let res = [];

    while (stack.length) {
        let curr = queue.pop();
        let upperBound = undefined; 
        let lowerBound = undefined;
    }
    // Determine if the tree is a valid binary search tree


    return true;
}
