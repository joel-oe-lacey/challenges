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


//BFS