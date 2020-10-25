const input = document.getElementById("input");
const playButton = document.getElementById("play");


playButton.addEventListener("click", function() {
    if (input.value.length) {
        let inputVal = input.value;
        var player = new Audio(inputVal);
        player.crossOrigin = "anonymous";
        player.addEventListener("canplaythrough", function() {
            player.play();
            console.log("Playing Audio " + inputVal);
        })
    }
})