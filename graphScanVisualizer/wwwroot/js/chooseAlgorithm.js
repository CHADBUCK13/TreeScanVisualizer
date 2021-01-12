// selectedAlgorithm is global because it is used in all of the below functions and set to -1 to avoid confusion with chosen algorithm
var selectedAglorithm = -1;

//Get dropButton to change text on it onClick
var displayAlgorithm = document.getElementById("dropButtonName");

/* Each of the below functions, sets selected algorithm to integer value corresponding to condition in startAnimation().
 * It also changes the text on the dropdown button to the selected algorithm.
 */

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