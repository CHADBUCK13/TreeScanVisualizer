function startAnimation()
{
    createGraph();
    
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
}