function animateNodeProcessing(currentCircleIndex) {
    var currentCircleX = circlePos[currentCircleIndex][0]; //Get x coordinate to animate
    var currentCircleY = circlePos[currentCircleIndex][1]; //Get y coordinate to animate

    //Get canvas
    var canvas = document.getElementById("graphCanvas");
    var context = canvas.getContext("2d");

    //Adjust virtual canvas size for image quality
    var size = 1000;
    var scale = window.devicePixelRatio;
    canvasSize = Math.floor(size * scale)
    canvas.width = canvasSize;
    canvas.height = canvasSize / 1.35;

    //Get x&y coordinate to animate
    var currentCircleX = circlePos[currentCircleIndex][0];
    var currentCircleY = circlePos[currentCircleIndex][1];

    //Go to current circle position
    context.beginPath();
    context.arc(currentCircleX, currentCircleY, 20, 0, 2 * Math.PI);
    context.fillStyle = "#00eded";
    context.fill();
    context.stroke();
}