function animatePreOrder(nodeIndex) {
    //Get current node
    var node = graph[nodeIndex];
  
    //Push current nodeIndex to visitOrder to be used for animation
    visitOrder.push(nodeIndex);

    //If there is a node to the left go recursively to node on left
    if (Array.isArray(graph[node[0]])) {
        animatePreOrder(node[0]); //Go recursively to node on left
    }

    //If there is a node on the right go recursively to node on right
    if (Array.isArray(graph[node[1]])) {
        animatePreOrder(node[1]); //Go recursively to node on right
    }
    
    
       
}