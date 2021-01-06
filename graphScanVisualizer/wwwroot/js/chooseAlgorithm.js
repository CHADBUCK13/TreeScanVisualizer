var selectedAglorithm = 0;
var displayAlgorithm = document.querySelector("dropButtonName");


function choosePreOrder() {
    selectedAglorithm = 0;
    displayAlgorithm.innerHTML = "PRE-ORDER SEARCH";
}

function chooseInOrder() {
    selectedAglorithm = 1;
    displayAlgorithm.innerHTML = "IN-ORDER SEARCH";
}

function choosePostOrder() {
    selectedAglorithm = 2;
    displayAlgorithm.innerHTML = "POST-ORDER SEARCH";
}

function chooseBreadthFirst() {
    selectedAglorithm = 3;
    displayAlgorithm.innerHTML = "BREADTH-FIRST SEARCH";
}