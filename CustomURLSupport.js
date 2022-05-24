const input = document.getElementById("input");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pausebutton");





playButton.addEventListener("click", function() {
    if (input.value.length) {
        var inputVal = input.value;
        var player = new Audio(inputVal);
        player.crossOrigin = "anonymous";
        player.addEventListener("canplaythrough", function() {
            player.play();
            console.log("Playing Audio " + inputVal);
        })
    }
})


function pauseAudio() {
  var inputVal = input.value
  var player = new Audio(inputVal);
        player.crossOrigin = "anonymous";
        player.addEventListener("canplaythrough", function() {
            player.pause();
            console.log("Paused Audio " + inputVal);
        })
}
        
        
                                