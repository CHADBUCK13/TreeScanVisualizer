function animatePostOrder(nodeIndex) {

    //Get current node
    var node = graph[nodeIndex];

    //If there is a node to the left go recursively to node on left
    if (Array.isArray(graph[node[0]])) {
        animatePostOrder(node[0]); 
    }    

    //If there is a node on the right go recursively to node on right
    if (Array.isArray(graph[node[1]])) {
        animatePostOrder(node[1]); 
    }

    //Push current nodeIndex to visitOrder to be used for animation
    visitOrder.push(nodeIndex);
}