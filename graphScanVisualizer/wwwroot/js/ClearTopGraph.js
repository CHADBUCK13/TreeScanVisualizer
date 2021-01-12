//Clear canvas on top of background canvas to avoid lag when restarting animation
function clearTopGraph() {
    var canvas = document.getElementById("topLevelCanvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
}