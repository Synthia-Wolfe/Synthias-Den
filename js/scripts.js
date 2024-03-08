let blargSound = document.getElementById("blarg-link");
function blarg(){
    let audio = new Audio("../audio/BLARG.wav");
    audio.play()
}
play.addEventListener("click", blarg);