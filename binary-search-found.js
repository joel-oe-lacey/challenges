//foundational scratch space to outline binary search methods
//DFS 
const preorderSearch = node => {
    // Check that a node exists.
    if (node === null) {
        return;
    }

    // Print the data of the node.
    console.log(node.data);

    // Pass in a reference to the left child node to preorderSearch.
    // Then, pass reference to the right child node to preorderSearch.
    preorderSearch(node.left);
    preorderSearch(node.right);
}

const inorderSearch = node => {
    // Check that a node exists.
    if (node === null) {
        return;
    }

    // Start with left child node and continue down that path as far as you can
    inorderSearch(node.left);

    // Print the data of the node.
    console.log(node.data);

    // Then, pass reference to the right child node to inorderSearch.
    inorderSearch(node.right);
}


//BFS