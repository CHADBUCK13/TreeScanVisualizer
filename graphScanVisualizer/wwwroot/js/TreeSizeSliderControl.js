//Get graphSize and graphSizeOutput objects
var slider = document.getElementById("graphSize");
var output = document.getElementById("graphSizeOutput");

//Get user input graphSize
var inputGraphSize = slider.value
output.innerHTML = inputGraphSize;

//Output user graphSize input
slider.oninput = function ()
{
    inputGraphSize = this.value;
    output.innerHTML = inputGraphSize;
}