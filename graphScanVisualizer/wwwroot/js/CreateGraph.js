function createGraph()
{
    //Get canvas
    var canvas = document.getElementById("graphCanvas");
    var context = canvas.getContext("2d");

    //Adjust virtual canvas size for image quality
    var size = 1000;
    var scale = window.devicePixelRatio; 
    canvasSize = Math.floor(size * scale)
    canvas.width = canvasSize;
    canvas.height = canvasSize;

    //Start context position
    var x = canvasSize / 2;
    var y = canvasSize / 20;

    //Value by which coordinate will change to draw next circle
    var xChange = 50;
    var yChange = 50;

    //Draw first circle
    context.beginPath();
    context.arc(x, y, 20, 0, 2 * Math.PI);
    context.stroke();

    //Input 0 in first circle TODO
    context.font = "15px Arial";
    context.fillText("0", x - 4, y + 4);

    //Create array to store position of each circle drawn and input first circle coordinate
    var circlePos = new Array(inputGraphSize).fill(new Array(2).fill(0)); 
    circlePos[0] = [x, y]; 

    //Creat array to store whether or not right or left direction arrow has been drawn already [left, right]
    var alreadyDrawn = new Array(inputGraphSize).fill(new Array(2).fill(false)); 

    //Draw graph
    for (let i = 0; i < inputGraphSize; i++)
    {
        //Choose random circle that has already been drawn to start at
        var startCircle = Math.floor((Math.random() * (i + .99999)));
        x = circlePos[startCircle][0];
        y = circlePos[startCircle][1];   


        //~50/50 chance or going left or going right and record direction
        var left = false;
        

        //Try to draw line if line hasnt been drawn in that direction, if drawn in both direction check next circle to see drawing is possible
        var lineDrawn = false;
        while (!lineDrawn)
        {
            //Draw line to new x,y coordinate
            if (left && !alreadyDrawn[startCircle][0])
            {
                context.moveTo(x - 14, y + 14);
                x -= xChange;
                y += yChange;                
                context.lineTo(x + 14, y - 14);
                context.stroke();
                lineDrawn = true;
                alreadyDrawn[startCircle][0] = true;
            }
            else if (!left && !alreadyDrawn[startCircle][1])
            {
                context.moveTo(x + 14, y + 14);
                x += xChange;
                y += yChange;                
                context.lineTo(x - 14, y - 14);
                context.stroke();
                lineDrawn = true;
                alreadyDrawn[startCircle][1] = true;
            }
            else
            {
                startCircle++;
            }
        }

        //Draw current circle and store position
        context.beginPath();
        context.arc(x, y, 20, 0, 2 * Math.PI);
        context.stroke();
        circlePos[i] = [x, y];

        //Input current number
        context.font = "15px Arial";
        context.fillText("" + (i+1), x - 4, y + 4);
    }
    
}

//Save each circle position in array corresponding to number stored in circle then just fill that circle instead of bolding line
