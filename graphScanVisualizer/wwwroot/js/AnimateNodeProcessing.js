var interval; //Global variable because if not previous instance will not be cleared because of scope

function animateNodeProcessing() {
    //Begin at index 0 (1st node)
    var currentCircleIndex = 0;

    //Clear previous interval if it exists
    if (interval !== undefined) {
        clearInterval(interval); 
    }

    //Animate algorithm path (1 second between each animation)
    interval = setInterval(function () {

        if (currentCircleIndex < visitOrder.length) {
           

            //Get canvas
            var canvas = document.getElementById("topLevelCanvas");
            var context = canvas.getContext("2d");

            //Adjust virtual canvas size for image quality
            var size = 1000;
            var scale = window.devicePixelRatio;
            canvasSize = Math.floor(size * scale)
            canvas.width = canvasSize;
            canvas.height = canvasSize / 1.35;

            //Get x,y coordinate to animate by looping through (with setInterval) visitOrder and animating each circle
            var currentCircleX = circlePos[visitOrder[currentCircleIndex]][0];
            var currentCircleY = circlePos[visitOrder[currentCircleIndex]][1];

            //Go to current circle position and draw circle
            context.beginPath();
            context.arc(currentCircleX, currentCircleY, 20, 0, 2 * Math.PI);
            context.fillStyle = "#66bbcc";
            context.fill();
            context.stroke();

            //
            currentCircleIndex++;
            
        }

        //After looping through all visitOrder elements stop animating
        else {
            clearInterval(interval);
        }        
    }, 1000);

    //Display visitOrder for user view after animation has finished
    document.getElementById("orderOfVisitOutput").innerHTML = visitOrder;
    
}