function animateBreadthFirst(nodeIndex)
{   
    //Create queue to store order of algorithm pass-through
    var queue = [];

    //Push first node to queue
    node = graph[nodeIndex];
    queue.push(nodeIndex);

    while (queue.length) {
        //Push node for current queue position to visitOrder
        nodeIndex = queue.shift();
        node = graph[nodeIndex];
        visitOrder.push(nodeIndex);

        //If node to left exists push to queue
        if (Array.isArray(graph[node[0]])) {

            queue.push(node[0]);
        }

        //If node to right exists push to queue (after node to left)
        if (Array.isArray(graph[node[1]])) {
            queue.push(node[1]);
        }
    }
}