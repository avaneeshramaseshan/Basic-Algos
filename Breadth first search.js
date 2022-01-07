// Function to find the distance of all nodes from a given node in a graph. Parameters - graph, given node(root)
function breadthFirstSearch(graph, root) {
    var nodesLen = {}; // nodesLen stores distances from the root node
    for (let i = 0; i < graph.length; i++) {
        nodesLen[i] = Infinity; // assuming the distances of all nodes from root node to be infinity
    }
    nodesLen[root] = 0;
    var queue = [root];
    var current;
    while (queue.length !== 0) {
        current = queue.shift();
        var curConnected = graph[current];
        var neighbourIndex = [];
        // var idx = curConnected.indexOf(1);
        // while (idx != -1) {
        //     neighbourIndex.push(idx);
        //     idx = curConnected.indexOf(1, idx + 1);
        // }
        for (let j = 0; j < curConnected.length; j++) {
            if (curConnected[j] === 1) {
                neighbourIndex.push(j);
            }
        }
        for (let j = 0; j < neighbourIndex.length; j++) {
            if (nodesLen[neighbourIndex[j]] === Infinity) {
                nodesLen[neighbourIndex[j]] = nodesLen[current] + 1;
                queue.push(neighbourIndex[j]);
            }
        }
    }
    return nodesLen;
}

var graph1 = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
];
console.log(breadthFirstSearch(graph1, 1));
console.log(breadthFirstSearch(graph1, 4));