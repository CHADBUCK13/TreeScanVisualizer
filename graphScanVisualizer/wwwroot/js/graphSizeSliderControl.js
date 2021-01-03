var slider = document.getElementById("graphSize");
var output = document.getElementById("graphSizeOutput");

var inputGraphSize = slider.value
output.innerHTML = inputGraphSize;

slider.oninput = function ()
{
    inputGraphSize = this.value;
    output.innerHTML = inputGraphSize;
}