//Creat graph and circlePos for later backend use with algorithms (graph: 2d array where index is a corresponds to node and each array is all linked nodes, 
//circlePos: 2d array where index corresponds to circle and each array is [x,y] coordinates)
var graph;
var circlePos;

function createGraph() {
    
    //Get canvas
    var canvas = document.getElementById("backGroundCanvas");
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

    //Initialize graph array with -1 meaning no node is connected to [left,right], size of graph array is size of inputGraphSize
    graph = [[-1,-1]];
    for (let i = 0; i < inputGraphSize; i++) {
        graph.push([-1, -1]);
    }

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

            //Added to remove right bias due to order of if-else statement below (if want to go right but right is already drawn, see if can go left)
            if (!left && rightDrawn[startCircle]) {
                left = true;
            }

            //Draw line to new x,y coordinate if left direction has not already been drawn
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
                    graph[startCircle].splice(0,1,i + 1); //set index 0 to circle attached to left                  

                    //Input current number
                    context.font = "15px Arial";
                    context.fillText("" + (i + 1), x - 4, y + 4);
                }

                else {
                    i--;
                    break;
                }
                
            }

            //Draw line to new x,y coordinate if right direction has not already been drawn
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
                    graph[startCircle].splice(1, 1, i + 1); //set index 1 to circle attached to left    

                    //Input current number
                    context.font = "15px Arial";
                    context.fillText("" + (i + 1), x - 4, y + 4);
                }

                else {
                    i--;
                    break;
                }
            }

            //If both directions already drawn for startCircle, move to next circle and try again
            else {
                startCircle++;
            }
        }          
               
    }

    
}


//Check if coordinate(array of size 2) exists in array(2d array of arrays of size 2)
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


