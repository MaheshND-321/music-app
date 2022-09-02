console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let songname = document.getElementById('sname');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Love Me Like You Do", filePath: "songs/1.mp3", coverPath: "covers/cover1.jpg"},
    {songName: "Uppenantha", filePath: "songs/2.mp3", coverPath: "covers/cover1.jpg"},
    {songName: "Dangerous", filePath: "songs/3.mp3", coverPath: "covers/cover1.jpg"},
    {songName: "Believer", filePath: "songs/4.mp3", coverPath: "covers/cover1.jpg"},
    {songName: "Munjaane Manjalli", filePath: "songs/5.mp3", coverPath: "covers/cover1.jpg"},
    {songName: "Urvashi-Urvashi", filePath: "songs/6.mp3", coverPath: "covers/cover1.jpg"},
    {songName: 'Soch Na Sake', filePath: "songs/7.mp3", coverPath: "covers/cover1.jpg"},
    {songName: "Tum Hi Ho", filePath: "songs/8.mp3", coverPath: "covers/cover1.jpg"},
    {songName: "Master-the-Blaster", filePath: "songs/9.mp3", coverPath: "covers/cover1.jpg"},
    {songName: "Unstoppable", filePath: "songs/10.mp3", coverPath: "covers/cover1.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.add('fa-pause');
        masterPlay.classList.remove('fa-play');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    //songname.classList.remove('songName');
    //songname.classList.add('songName');
})