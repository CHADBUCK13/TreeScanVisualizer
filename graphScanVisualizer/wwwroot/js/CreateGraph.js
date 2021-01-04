function createGraph()
{
    //Get canvas
    var canvas = document.getElementById("graphCanvas");
    var context = canvas.getContext("2d");

    //Adjust virtual canvas size
    var size = 1000;
    var scale = window.devicePixelRatio; 
    canvas.width = Math.floor(size * scale);
    canvas.height = Math.floor(size * scale);

    var x = 0; 
    var y = 0;


    context.beginPath();
    context.arc(50, 50, 15, 0, 2 * Math.PI);
    context.stroke();
}

//Save each circle position in array corresponding to number stored in circle then just fill that circle instead of bolding line
