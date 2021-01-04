//TODO: Change dropdown button to current algorithm

var selectedAglorithm = 0; // 0 = Ad-Hoc, 1 = Depth-First, 2 = Breadth-First
var dropButtonName = document.getElementById("dropButtonName");

function chooseAdHoc()
{
    selectedAglorithm = 0;
    dropButtonName.innerHTML = "AD-HOC SEARCH";
}

function chooseDepthFirst()
{
    selectedAglorithm = 1;
    dropButtonName.innerHTML = "DEPTH-FIRST SEARCH";
}

function chooseBreadthFirst()
{
    selectedAglorithm = 2;
    dropButtonName.innerHTML = "BREADTH-FIRST SEARCH";
}