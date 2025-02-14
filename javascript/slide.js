let images = [
    "/slideshow/image1.jpg",
    "/slideshow/image2.jpg",
    "/slideshow/image3.jpg",
    "/slideshow/image4.jpg",
    "/slideshow/image5.jpg",
    "/slideshow/image6.jpg",
    "/slideshow/image7.jpg",
    "/slideshow/image8.jpg",
    "/slideshow/image9.jpg",
    "/slideshow/image10.jpg",
    "/slideshow/images 11.jpg",
    "/slideshow/images 12.jpg",
    "/slideshow/images 13.jpg",
    "/slideshow/images 14.jpg",
    "/slideshow/images 15.jpg",
    "/slideshow/images 16.jpg",
    "/slideshow/images 17.jpg",
    "/slideshow/images 18.jpg",
    "/slideshow/images 19.jpg",
    "/slideshow/images 20.jpg",
    "/slideshow/images 21.jpg",
    "/slideshow/images 22.jpg",
    "/slideshow/images 23.jpg",
    "/slideshow/images 24.jpg",
    "/slideshow/images 25.jpg",
    "/slideshow/images 26.jpg",
    "/slideshow/images 27.jpg",
    "/slideshow/images 28.jpg",
    "/slideshow/images 29.jpg",
    "/slideshow/images 30.jpg",
];

let currentIndex = 0;
let slide = document.getElementById('slide');
let slideshowInterval;
let isSlideshowRunning = true;

function changeImage(){
    currentIndex ++;
    if(currentIndex >= images.length){
        currentIndex = 0;
    }
    slide.src = images[currentIndex];
}

function startSlideshow(){
    if (!slideshowInterval){
        slideshowInterval = setInterval (changeImage, 5000);
    }
}

function stopSlideshow(){
    if (slideshowInterval){
        clearInterval(slideshowInterval);
        slideshowInterval = null;
    }
}



let music = document.getElementById('background-music');
let playButton = document.getElementById('play-music');

playButton.addEventListener('click', function(){
    if (music.paused){
        music.play();
        playButton.innerText = "Pause Music"
        startSlideshow();
    } else{
        music.pause();
        playButton.innerText = 'Play Music';
        stopSlideshow();
    }
})