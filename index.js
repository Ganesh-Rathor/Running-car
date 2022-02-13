var audio = document.createElement('audio');
function playSound(){
audio.setAttribute("src","audio.mp3");
audio.loop = true;
audio.play();
}
function off(){
    audio.loop = false;
}