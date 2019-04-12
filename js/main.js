//array of image sources
let images = [
    "/img/pic1.jpeg",
    "/img/pic2.jpeg",
    "/img/pic3.jpeg"
]

let index = 0;
var timer = null;
let paused = false;

let nextButton = document.getElementById('buttonNext');

let back = document.getElementById('buttonBack');

let pauseButton = document.getElementById("buttonPause");

let playButton = document.getElementById("buttonPlay");

window.onload = function () {
    timer = setInterval(autoNext, 2000);
    playButton.className = 'buttonSelected';    
    pauseButton.className = '';
};

function pause (){
    window.clearInterval(timer);
    paused = true;
    //since the user has paused the animation, I re-enable the playButton.
    playButton.disabled = false;
    pauseButton.className = 'buttonSelected';    
    playButton.className = '';
};

function next() {
    let img = document.getElementById('img');
    index >= images.length - 1 ? index = 0 : index++;
    img.src = images[index];
    pause();
};

function autoNext() {
    let img = document.getElementById('img');
    index >= images.length - 1 ? index = 0 : index++;
    img.src = images[index];
};

function previous() {
    let img = document.getElementById('img');
    index <= 0 ? index = images.length - 1 : index--;
    img.src = images[index];
    pause();
};

window.addEventListener('keydown', function(event){
    if(event.code === 'ArrowRight'){
        next();
    }
    else if(event.code === 'ArrowLeft'){
        previous();
    }
})

nextButton.onclick = next;
back.onclick = previous; 
pauseButton.onclick = pause;

playButton.onclick = function () {
    if (paused) {
        timer = setInterval(autoNext, 2000);
        paused = false;
    }
    playButton.disabled = true;
    playButton.className = 'buttonSelected';    
    pauseButton.className = '';
};