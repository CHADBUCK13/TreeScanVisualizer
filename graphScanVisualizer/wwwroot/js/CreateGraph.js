//Creat graph for later backend use with algorithms (2d array where index is a smallest cirlce and each array is all linked circles)
var graph = [];
var circlePos;
for (let i = 0; i < inputGraphSize; i++) {
    graph.push([]);
}
function createGraph() {
    //Get canvas
    var canvas = document.getElementById("graphCanvas");
    var context = canvas.getContext("2d");

    //Adjust virtual canvas size for image quality
    var size = 1000;
    var scale = window.devicePixelRatio;
    canvasSize = Math.floor(size * scale)
    canvas.width = canvasSize;
    canvas.height = canvasSize / 1.35;

    //Start context/circle position
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
    circlePos =[[x, y]];
    var circlePosLength = 1;

    //Creat arrays to store whether or not right or left direction arrow has been drawn already 
    var leftDrawn = [];
    var rightDrawn = [];
    for (let i = 0; i < inputGraphSize; i++) {
        leftDrawn.push(false);
        rightDrawn.push(false);
    }

    //Draw graph
    for (let i = 0; i < inputGraphSize; i++) {

        //Choose random circle that has already been drawn to start at
        var startCircle = Math.floor((Math.random() * (i + .99999)));
   
        //~50/50 chance or going left or going right
        var left = false;
        if (Math.random() > .5) {
            left = true;
        }

        //Try to draw line if line hasnt been drawn in chosen random direction, if drawn in both directions check next circle to see drawing is possible
        var lineDrawn = false;
        while (!lineDrawn) {

            //Draw line to new x,y coordinate if direction has not already been drawn
            if (left && !leftDrawn[startCircle]) {
                x = circlePos[startCircle][0];
                y = circlePos[startCircle][1];
                context.moveTo(x - 14, y + 14);
                x -= xChange;
                y += yChange;

                //Check if current coordinate is already taken, else restart current loop
                if (!checkEqualCoordinates(circlePos, [x, y], circlePosLength))
                {
                    //Draw line to next circle position
                    context.lineTo(x + 14, y - 14);
                    context.stroke();
                    lineDrawn = true;
                    leftDrawn[startCircle] = true;

                    //Draw current circle, store position and update graph
                    context.beginPath();
                    context.arc(x, y, 20, 0, 2 * Math.PI);
                    context.stroke();
                    circlePos.push([x, y]);
                    circlePosLength++;
                    graph[startCircle].push(i + 1);                  

                    //Input current number
                    context.font = "15px Arial";
                    context.fillText("" + (i + 1), x - 4, y + 4);
                }

                else {
                    i--;
                    break;
                }
                
            }

            else if (!rightDrawn[startCircle]) {
                x = circlePos[startCircle][0];
                y = circlePos[startCircle][1];
                context.moveTo(x + 14, y + 14);
                x += xChange;
                y += yChange;

                //Check if current coordinate is already taken, else restart current loop
                if (!checkEqualCoordinates(circlePos, [x, y], circlePosLength)) {

                    //Draw line to next circle position
                    context.lineTo(x - 14, y - 14);
                    context.stroke();
                    lineDrawn = true;
                    leftDrawn[startCircle] = true;

                    //Draw current circle, store position and update graph
                    context.beginPath();
                    context.arc(x, y, 20, 0, 2 * Math.PI);
                    context.stroke();
                    circlePos.push([x, y]);
                    circlePosLength++;
                    graph[startCircle].push(i + 1);   

                    //Input current number
                    context.font = "15px Arial";
                    context.fillText("" + (i + 1), x - 4, y + 4);
                }

                else {
                    i--;
                    break;
                }
            }


            else {
                startCircle++;
            }
        }          
               
    }
}


//Check if coordinate(array of size 2) exists in array(array of arrays of size 2)
function checkEqualCoordinates(array, coordinate, arrayLength) {
    var match = false;
    for (let i = 0; i < arrayLength; i++) {
        if (array[i][0] == coordinate[0] && array[i][1] == coordinate[1]) {
            match = true;
            break;
        }
    }

    if (match) {
        return true;
    }

    else {
        return false;
    }
}

//Save each circle position in array corresponding to number stored in circle then just fill that circle instead of bolding line
