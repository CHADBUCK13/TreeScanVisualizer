var visitOrder;

function startAnimation()
{
    //Clear top graph before starting
    document.getElementById("startButton").addEventListener("click", clearTopGraph);
    
    

    //Create tree animation and tree data structure
    createGraph();

    

    //Set/reset array to store visit order
    visitOrder = [];

    //Start chosen algorithm
    if (selectedAglorithm == 0) {
        animatePreOrder(0);
    }

    else if (selectedAglorithm == 1) {
        animateInOrder(0);
    }

    else if (selectedAglorithm == 2) {
        animatePostOrder(0);
    }

    else if (selectedAglorithm == 3) {
        animateBreadthFirst(0);
    }

    //Wait 2 seconds and start algorithm animation
    setTimeout(animateNodeProcessing(), 2000);
}


