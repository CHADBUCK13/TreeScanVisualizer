function startAnimation()
{
    createGraph();
    
    if (selectedAglorithm == 0)
    {
        animateAdHoc();
    }

    else if (selectedAglorithm == 1)
    {
        animateDepthFirst();
    }

    else if (selectedAglorithm == 2)
    {
        animateBreadthFirst();
    }
}