function animatePreOrder(nodeIndex)
{
    /* preorder(node)
    if (node == empty || node does not exist)
        return
    animateNodeVisit(node)
    preorder(node.left)
    preorder(node.right)
    */
    var node = graph[nodeIndex];
    if (!node.length || !Array.isArray(node)) {
        return;        
    }
    animateNodeVisit(nodeIndex); //Animate where algorithm currently is
    animateNodeProcessing(nodeIndex); //Animate which node is being processed
    animatePreOrder(node[0]); //Go recursively to node on left
    animatePreOrder(node[1]); //Go recursively to node on right
}