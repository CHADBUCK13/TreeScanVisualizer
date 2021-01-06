function startAnimation()
{
    createGraph();
    
    if (selectedAglorithm == 0) {
        animatePreOrder();
    }

    else if (selectedAglorithm == 1) {
        animateInOrder();
    }

    else if (selectedAglorithm == 2) {
        animatePost-order();
    }

    else if (selectedAglorithm == 3) {
        animateBreadthFirst;
    }
}